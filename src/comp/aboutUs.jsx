import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/home.css"








gsap.registerPlugin(ScrollTrigger);


export default function AboutUs(){

    const boxRef2 = useRef(null);

    useEffect(()=>{
                
        gsap.to(boxRef2.current, {
            scrollTrigger: {
          trigger: boxRef2.current,
          start: "top 80%", // Trigger animation when top of the box is 80% from the top of the viewport
          end: "top 30%", // End the animation when top of the box is 30% from the top of the viewport
          scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          // Show start and end markers (for debugging)
      },
        y: -100, // Animate the box 300px to the right
        // Rotate the box 360 degrees
        duration: 2,
        
      });
    },[])

    
    return(<>
      <div  className="slider-parent">
  <h1 className="slider-txt">WE ARE STS <span className="slider-divider-dot"></span></h1>
  <h1 className="slider-txt">WE ARE STS <span className="slider-divider-dot"></span></h1>
  <h1 className="slider-txt">WE ARE STS <span className="slider-divider-dot"></span></h1>
  <h1 className="slider-txt">WE ARE STS <span className="slider-divider-dot"></span></h1>
  <h1 className="slider-txt">WE ARE STS <span className="slider-divider-dot"></span></h1>
  <h1 className="slider-txt">WE ARE STS <span className="slider-divider-dot"></span></h1>
  <h1 className="slider-txt">WE ARE STS <span className="slider-divider-dot"></span></h1>
  <h1 className="slider-txt">WE ARE STS <span className="slider-divider-dot"></span></h1>
  <h1 className="slider-txt">WE ARE STS <span className="slider-divider-dot"></span></h1>
  <h1 className="slider-txt">WE ARE STS <span className="slider-divider-dot"></span></h1>
</div>
    <div ref={boxRef2} className="aboutus-parent">
      <p className="aboutus-txt">
      <h4 className="aboutus-wc">about us</h4>
      We are an agency specializing in AI-driven automated gold trading. Our expert-led courses empower you to master cutting-edge trading programs, helping you unlock financial opportunities. Start learning with us today and take control of your financial future!"

This version clearly communicates your expertise and the benefits of engaging with your agency</p>
    </div>
    </>)
}