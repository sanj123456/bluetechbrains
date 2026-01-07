// // components/SmoothScroll.js
// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const SmoothScroll = ({ children }) => {
//   const scrollContainer = useRef(null);
//   // NOTE: SmoothScroll logic moved to navbar 
//   useEffect(() => {
//     if (window?.innerWidth <= 768) return;
//     const container = scrollContainer.current;

//     gsap.to(container, {
//       y: () =>
//         -(container.scrollHeight - document.documentElement.clientHeight),
//       ease: "power1.out",
//       scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1.4,
//         // scrub: 1.5,
//         invalidateOnRefresh: true,
//       },
//     });
//   }, []);

//   return <div ref={scrollContainer}>{children}</div>;
// };

// export default SmoothScroll;
