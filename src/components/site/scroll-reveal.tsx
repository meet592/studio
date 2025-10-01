'use client';

import { useRef, useEffect, useState, cloneElement, Children } from 'react';
import type { ReactElement } from 'react';

interface ScrollRevealProps {
  children: ReactElement;
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal({ children, delay = 0, threshold = 0.1 }: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const child = Children.only(children);
  const newClassName = `animate-reveal ${inView ? 'in-view' : ''} ${child.props.className || ''}`.trim();

  return cloneElement(child, {
    ref,
    className: newClassName,
    style: {
      ...child.props.style,
      transitionDelay: `${delay}s`,
    },
  });
}
