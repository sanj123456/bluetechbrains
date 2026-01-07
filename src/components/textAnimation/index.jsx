// import React, { useEffect } from "react";
// import './textanimation.scss';

// export default function TextAnimation() {
//   useEffect(() => {
//     const animateText = () => {
//       const txts = document.querySelector(".animate-text").children;
//       const txtsLen = txts.length;
//       let index = 0;
//       const textInTimer = 3000;
//       const textOutTimer = 2800;

//       const animate = () => {
//         for (let i = 0; i < txtsLen; i++) {
//           txts[i].classList.remove("text-in", "text-out");
//         }
//         txts[index].classList.add("text-in");

//         setTimeout(function () {
//           txts[index].classList.add("text-out");
//         }, textOutTimer);

//         setTimeout(function () {
//           if (index === txtsLen - 1) {
//             index = 0;
//           } else {
//             index++;
//           }
//           animate();
//         }, textInTimer);
//       };

//       animate();
//     };
//     animateText();
//   }, []);

//   return (
//     <div className="home-text">
//       <h1>Integrity Visionary Trusted</h1>
//       <p className="animate-text">
//         <span>E-Commerce</span>
//         <span>Digital Products</span>
//         <span>Websites</span>
//         <span>Web Apps</span>
//         <span>Mobile Apps</span>
//       </p>
//     </div>
//   );
// }
import React, { useEffect } from "react";
import './textanimation.scss';

export default function TextAnimation() {
  useEffect(() => {
    const animateText = () => {
      const fallbackText = document.querySelector(".fallback-text");
      const txts = document.querySelector(".animate-text").children;
      const txtsLen = txts.length;
      let index = 0;
      const textInTimer = 3000;
      const textOutTimer = 2800;

      const animate = () => {
        // Hide fallback text when animation starts
        if (fallbackText) {
          fallbackText.style.display = "none";
        }

        for (let i = 0; i < txtsLen; i++) {
          txts[i].classList.remove("text-in", "text-out");
        }
        txts[index].classList.add("text-in");

        setTimeout(function () {
          txts[index].classList.add("text-out");
        }, textOutTimer);

        setTimeout(function () {
          if (index === txtsLen - 1) {
            index = 0;
          } else {
            index++;
          }
          animate();
        }, textInTimer);
      };

      animate();
    };
    animateText();
  }, []);

  return (
    <div className="home-text">
      <h1>Integrity Visionary Trusted</h1>
      <p className="fallback-text">E-Commerce</p>
      <p className="animate-text">
        <span>E-Commerce</span>
        <span>Digital Products</span>
        <span>Websites</span>
        <span>Web Apps</span>
        <span>Mobile Apps</span>
      </p>
    </div>
  );
}

