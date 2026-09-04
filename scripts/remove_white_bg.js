import sharp from 'sharp';
import path from 'path';

async function processImage() {
  const inputPath = path.resolve('public/embryoone-logo.png');
  const outputPath = path.resolve('public/embryoone-logo-transparent.png');

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Processing image: ${width}x${height}, channels: ${channels}`);

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Check if pixel is white or near-white
    if (r > 200 && g > 200 && b > 200) {
      const minVal = Math.min(r, g, b);
      if (minVal > 240) {
        data[i + 3] = 0; // Pure transparent
      } else {
        const alpha = Math.floor(255 * (255 - minVal) / 55);
        data[i + 3] = Math.max(0, Math.min(255, alpha));
      }
    }
  }

  await sharp(data, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png()
    .toFile(outputPath);

  console.log('Successfully saved transparent logo to:', outputPath);
}

processImage().catch(console.error);
