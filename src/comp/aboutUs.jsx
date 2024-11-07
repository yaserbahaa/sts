import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/home.css"
import sts from "../assets/sts.JPG"








gsap.registerPlugin(ScrollTrigger);


export default function AboutUs(){

    const boxRef1 = useRef(null);
    const boxRef2 = useRef(null);


    useEffect(()=>{
      gsap.to(boxRef1.current, {
        scrollTrigger: {
      trigger: boxRef1.current,
      start: "-600px 90%", // Trigger animation when top of the box is 80% from the top of the viewport
      end: "-600px 50%", // End the animation when top of the box is 30% from the top of the viewport
      scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // Show start and end markers (for debugging)
      // markers:true
  },
    y: -500, // Animate the box 300px to the right
    duration: 2,
    
  });

        gsap.to(boxRef2.current, {
            scrollTrigger: {
          trigger: boxRef2.current,
          start: "-917px 90%", // Trigger animation when top of the box is 80% from the top of the viewport
          end: "-915px 50%", // End the animation when top of the box is 30% from the top of the viewport
          scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          // Show start and end markers (for debugging)
          // markers:true
      },
        y: -500, // Animate the box 300px to the right
        // Rotate the box 360 degrees
        duration: 2,
        
      });
    },[])

    
    return(<>
      <div ref={boxRef1}  className="slider-parent">
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
      <span className="fillgap-aboutus"></span>
      <img className="aboutusImg" src={sts} alt="" />
    </div>
    
    </>)
}