const fs = require('fs');

const { createCanvas, loadImage } = require('canvas');

async function removeBackground() {
  const image = await loadImage('public/embryoone-logo.png');
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');
  
  ctx.drawImage(image, 0, 0);
  
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Check if pixel is white or near white
    if (r > 240 && g > 240 && b > 240) {
      data[i + 3] = 0; // Set alpha to 0 (transparent)
    } else if (r > 220 && g > 220 && b > 220) {
      // Soften edges
      const brightness = (r + g + b) / 3;
      data[i + 3] = Math.max(0, Math.min(255, (255 - brightness) * (255 / 35)));
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('public/embryoone-logo-transparent.png', buffer);
  console.log('Background removed successfully!');
}

removeBackground().catch(console.error);
