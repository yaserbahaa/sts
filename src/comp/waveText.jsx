import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../css/WaveText.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/workIntro.css"








gsap.registerPlugin(ScrollTrigger);




const WaveText = () => {
  const textRef = useRef(null);



const handleMouseEnter = () => {
    gsap.to(textRef.current.children, {
      color: "darkgoldenrod ",       // Change color
      scale: 1.4,         // Scale up
      ease: "power2.out", // Easing for smooth effect
      stagger: 0.05,      // Stagger the animation for each letter
      duration: 0.4       // Animation duration
    });
  };
  
  const handleMouseLeave = () => {
    gsap.to(textRef.current.children, {
      color: "black",     // Reset color
      scale: 1,           // Reset scale
      ease: "power2.out", // Easing for smooth effect
      stagger: 0.05,      // Stagger the reset animation
      duration: 0.4       // Reset animation duration
    });
  };
  

  useEffect(()=>{
    gsap.to(textRef.current.children, {
        scrollTrigger: {
            trigger: ".workIntro-parent",
          // endTrigger:".test",
          // toggleActions:"restart ",
          start: "20% 50%", // Trigger animation when top of the box is 80% from the top of the viewport
          end: "25% 50%", // End the animation when top of the box is 30% from the top of the viewport
          scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          // markers:true// Show start and end markers (for debugging)
      },
      color: "darkgoldenrod ",       // Change color
      scale: 1.4,         // Scale up
      ease: "power2.out", // Easing for smooth effect
      stagger: 0.05,      // Stagger the animation for each letter
      duration: 0.4       // Animation duration
    });


    gsap.to(textRef.current.children, {
        scrollTrigger: {
            trigger: ".workIntro-parent",
          // endTrigger:".test",
          // toggleActions:"restart ",
          start:"25% 50%", // Trigger animation when top of the box is 80% from the top of the viewport
          end: "30% 50%", // End the animation when top of the box is 30% from the top of the viewport
          scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          // markers:true// Show start and end markers (for debugging)
      },
        color: "black",     // Reset color
        scale: 1,           // Reset scale
        ease: "power2.out", // Easing for smooth effect
        stagger: 0.05,      // Stagger the reset animation
        duration: 0.4       // Reset animation duration
      });
  },[])

  
  return (
    <div
      ref={textRef}
      className="wave-text"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {`Let’s''collaborate`.split("").map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </div>
  );
};



export default WaveText;