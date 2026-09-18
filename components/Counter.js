'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Counter({ target, suffix = '+' }) {
  const numRef = useRef(null);

  useEffect(() => {
    const el = numRef.current;
    const counter = { v: 0 };
    const tween = gsap.to(counter, {
      v: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = Math.round(counter.v) + suffix;
      },
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [target, suffix]);

  return <h2 ref={numRef}>0{suffix}</h2>;
}
