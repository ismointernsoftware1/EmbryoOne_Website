import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollStack.css';

gsap.registerPlugin(ScrollTrigger);

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

/**
 * ScrollStack — High-Performance Folder-Tab Card Stack Scroll Animation.
 * Fully responsive and optimized for mobile, tablet, and desktop screens.
 */
const ScrollStack = ({
  children,
  header,
  className = '',
  scrubDamping = 1.2,
  topOffsetStep = 6,
  onStackComplete,
}) => {
  const wrapperRef = useRef(null);
  const viewportRef = useRef(null);
  const headerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const cardsContainer = cardsContainerRef.current;
    const headerEl = headerRef.current;
    if (!wrapper || !cardsContainer) return;

    // Query cards inside container
    const cards = gsap.utils.toArray('.scroll-stack-card', cardsContainer);
    const n = cards.length;
    if (n === 0) return;

    const mm = gsap.matchMedia();

    // Desktop & Tablet Landscape (min-width: 901px)
    mm.add('(min-width: 901px)', () => {
      // Reset card layout
      cards.forEach((card, i) => {
        gsap.set(card, {
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
          transformOrigin: '50% 0%',
          zIndex: (i + 1) * 10,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          margin: '0 auto',
          x: 0,
          xPercent: 0,
          y: i === 0 ? 0 : '100vh',
          scale: 1,
          opacity: 1,
        });
      });

      gsap.set(cardsContainer, { y: 0, opacity: 1 });
      if (headerEl) gsap.set(headerEl, { y: 0, opacity: 1 });

      const tl = gsap.timeline();

      // 1. Initial settle hold for first card
      tl.to({}, { duration: 0.4 });

      // 2. Sequential Card Entry & Folder-Tab Docking Phase
      cards.forEach((card, i) => {
        if (i > 0) {
          const enterLabel = `card-${i}-enter`;
          tl.addLabel(enterLabel);

          // Incoming card docks directly at y: 0 with scale: 1
          tl.to(
            card,
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 1.4,
              ease: 'power1.out',
            },
            enterLabel
          );

          // Previous cards slide slightly upward by topOffsetStep
          for (let j = 0; j < i; j++) {
            tl.to(
              cards[j],
              {
                y: -(i - j) * topOffsetStep,
                scale: 1,
                duration: 1.4,
                ease: 'power1.out',
              },
              enterLabel
            );
          }

          // Deliberate hold delay between card entries so each card is clearly readable
          tl.to({}, { duration: 0.6 });
        }
      });

      // 3. Stack Completed Hold
      tl.addLabel('stack-complete');
      tl.to({}, { duration: 0.6 }, 'stack-complete');

      // 4. Create GSAP ScrollTrigger pinning wrapper
      ScrollTrigger.create({
        trigger: wrapper,
        pin: true,
        start: 'top top',
        end: `+=${(n - 1) * 75 + 50}vh`,
        scrub: scrubDamping,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: tl,
        onUpdate: (self) => {
          if (self.progress >= 0.95 && onStackComplete) {
            onStackComplete();
          }
        },
      });
    });

    // Mobile & Tablet Portrait (max-width: 900px)
    mm.add('(max-width: 900px)', () => {
      const mobileOffsetStep = 4;

      cards.forEach((card, i) => {
        gsap.set(card, {
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
          transformOrigin: '50% 0%',
          zIndex: (i + 1) * 10,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          margin: '0 auto',
          x: 0,
          xPercent: 0,
          y: i === 0 ? 0 : '100vh',
          scale: 1,
          opacity: 1,
        });
      });

      gsap.set(cardsContainer, { y: 0, opacity: 1 });
      if (headerEl) gsap.set(headerEl, { y: 0, opacity: 1 });

      const tl = gsap.timeline();
      tl.to({}, { duration: 0.3 });

      cards.forEach((card, i) => {
        if (i > 0) {
          const enterLabel = `mobile-card-${i}-enter`;
          tl.addLabel(enterLabel);

          tl.to(
            card,
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 1.2,
              ease: 'power1.out',
            },
            enterLabel
          );

          for (let j = 0; j < i; j++) {
            tl.to(
              cards[j],
              {
                y: -(i - j) * mobileOffsetStep,
                scale: 1,
                duration: 1.2,
                ease: 'power1.out',
              },
              enterLabel
            );
          }

          tl.to({}, { duration: 0.5 });
        }
      });

      tl.addLabel('mobile-stack-complete');
      tl.to({}, { duration: 0.5 }, 'mobile-stack-complete');

      ScrollTrigger.create({
        trigger: wrapper,
        pin: true,
        start: 'top top',
        end: `+=${(n - 1) * 65 + 40}vh`,
        scrub: 1.0,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: tl,
        onUpdate: (self) => {
          if (self.progress >= 0.95 && onStackComplete) {
            onStackComplete();
          }
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, [scrubDamping, topOffsetStep, onStackComplete]);

  return (
    <div className={`scroll-stack-wrapper ${className}`.trim()} ref={wrapperRef}>
      <div className="scroll-stack-viewport" ref={viewportRef}>
        {header && (
          <div className="scroll-stack-header-wrapper" ref={headerRef}>
            {header}
          </div>
        )}
        <div className="scroll-stack-cards-container" ref={cardsContainerRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ScrollStack;
