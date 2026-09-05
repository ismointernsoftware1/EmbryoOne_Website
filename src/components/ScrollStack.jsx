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
 * Paced and optimized for smooth, readable scrolling on mobile, tablet, and desktop.
 */
const ScrollStack = ({
  children,
  header,
  className = '',
  scrubDamping = 1.5,
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
      tl.to({}, { duration: 0.5 });

      cards.forEach((card, i) => {
        if (i > 0) {
          const enterLabel = `card-${i}-enter`;
          tl.addLabel(enterLabel);

          tl.to(
            card,
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 1.8,
              ease: 'power1.out',
            },
            enterLabel
          );

          for (let j = 0; j < i; j++) {
            tl.to(
              cards[j],
              {
                y: -(i - j) * topOffsetStep,
                scale: 1,
                duration: 1.8,
                ease: 'power1.out',
              },
              enterLabel
            );
          }

          // Generous hold delay so each card is clearly readable
          tl.to({}, { duration: 1.0 });
        }
      });

      tl.addLabel('stack-complete');
      tl.to({}, { duration: 0.8 }, 'stack-complete');

      ScrollTrigger.create({
        trigger: wrapper,
        pin: true,
        start: 'top top',
        end: `+=${(n - 1) * 95 + 60}vh`,
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

    // Mobile & Tablet Portrait (max-width: 900px) — Significantly expanded scroll distance and readable holds
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
      tl.to({}, { duration: 0.5 });

      cards.forEach((card, i) => {
        if (i > 0) {
          const enterLabel = `mobile-card-${i}-enter`;
          tl.addLabel(enterLabel);

          // Slower, smoother card transition
          tl.to(
            card,
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 2.0,
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
                duration: 2.0,
                ease: 'power1.out',
              },
              enterLabel
            );
          }

          // Extended hold duration so each card remains on screen while scrolling
          tl.to({}, { duration: 1.4 });
        }
      });

      tl.addLabel('mobile-stack-complete');
      tl.to({}, { duration: 1.0 }, 'mobile-stack-complete');

      // Extended scroll scrub track (~120vh per card transition) for deliberate, controlled mobile scrolling
      ScrollTrigger.create({
        trigger: wrapper,
        pin: true,
        start: 'top top',
        end: `+=${(n - 1) * 120 + 80}vh`,
        scrub: 1.6,
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
