// // "use client"
// // import React, { useEffect, useRef } from 'react';
// // import { gsap } from 'gsap';

// // const StaggerText = () => {
// //   const textRef = useRef([]);

// //   useEffect(() => {
// //     gsap.from(textRef.current, {
// //       opacity: 0,
// //       y: 50,
// //       stagger: 0.9,
// //       duration: 1,
// //     });
// //   }, []);

// //   return (
// //     <div className="text-containerr">
// //       <span ref={(el) => (textRef.current[0] = el)}>Hand-picked </span>
// //       <span ref={(el) => (textRef.current[1] = el)}>and </span>
// //       <span ref={(el) => (textRef.current[2] = el)}>Best-read </span>
// //       <span ref={(el) => (textRef.current[3] = el)}>Stories</span>
// //     </div>
// //   );
// // };

// // export default StaggerText;
// "use client"
// import "./stagger.scss";
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const StaggerText = () => {
//   const textRef = useRef(null);

//   useEffect(() => {
//     const characters = textRef.current.querySelectorAll('.char');
    
//     gsap.fromTo(characters, {
//       opacity: 0,
//       y: 50,
//     }, {
//       opacity: 1,
//       y: 0,
//       stagger: 0.05,
//       duration: 1,
//       scrollTrigger: {
//         trigger: textRef.current,
//         start: 'top 80%',
//         end: 'bottom 20%',
//         scrub: true,
//       },
//     });
//   }, []);

//   const text = "Hello, welcome to my site!";
  
//   return (
//     <div ref={textRef} className="reveal-text">
//       {text.split('').map((char, i) => (
//         <span key={i} className="char">{char}</span>
//       ))}
//     </div>
//   );
// };

// export default StaggerText;
"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StaggerText = ({ text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };  

  const charVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textVariants}
      className="reveal-text"
    >
      {text.split(' ').map((word, wordIndex) => (
        <motion.div
          key={wordIndex}
          className="word"
          style={{ display: 'inline-block', marginRight: '0.2em' }} // To keep words inline and add space between words
        >
          {word.split('').map((char, charIndex) => (
            <motion.span key={charIndex} variants={charVariants} className="char">
              {char}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerText;
