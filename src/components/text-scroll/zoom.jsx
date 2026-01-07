"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ZoomTextEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const spans = container.querySelectorAll('#born-in-india');

    gsap.from(spans, {
      scale: 50,
      stagger: 0.25,
      duration: 3,
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 3,
        start: 'top top',
        end: () => `+=${window.innerHeight * 1.3}`,
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="born-in-india">
      <h2 id='born-in-india'>Born In India</h2>
    </div>
  );
};

export default ZoomTextEffect;