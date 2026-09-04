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
 *
 * Cards ascend from bottom edge and lock into a multi-tiered top header tab stack
 * with an incremental 14px top anchor offset and micro-scale depth compression.
 * Upon completion, the entire stack exits upward (translate3d(0, -120%, 0)) as a single cohesive unit.
 */
const ScrollStack = ({
  children,
  header,
  className = '',
  scrubDamping = 1.2,
  topOffsetStep = 14,
  exitScale = 0.98,
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

    // Reset GPU acceleration & initial card layout with locked 50% 0% transform origin
    cards.forEach((card, i) => {
      gsap.set(card, {
        willChange: 'transform',
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

    // 1. Sequential Card Entry & Uniform Folder-Tab Docking Phase
    cards.forEach((card, i) => {
      if (i > 0) {
        const enterLabel = `card-${i}-enter`;
        tl.addLabel(enterLabel);

        // Incoming card translates smoothly into its docked topOffset position
        tl.to(
          card,
          {
            y: i * topOffsetStep,
            scale: 1,
            duration: 1,
            ease: 'power1.out',
          },
          enterLabel
        );

        // Subtle hold delay between card entries for smooth scrubbing feel
        tl.to({}, { duration: 0.25 });
      }
    });

    // 2. Stack Completed Hold & Natural Unpin Phase
    tl.addLabel('stack-complete');
    tl.to({}, { duration: 0.3 }, 'stack-complete');

    // 3. Create GSAP ScrollTrigger pinning wrapper over exact docking scrub track
    const trigger = ScrollTrigger.create({
      trigger: wrapper,
      pin: true,
      start: 'top top',
      end: `+=${(n - 1) * 35 + 20}vh`,
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

    return () => {
      trigger.kill();
      tl.kill();
    };
  }, [scrubDamping, topOffsetStep, exitScale, onStackComplete]);

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
