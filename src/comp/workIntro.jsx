import "../css/workIntro.css"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/home.css"








gsap.registerPlugin(ScrollTrigger);














export default function WorkIntro(){


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
        y: -170, // Animate the box 300px to the right
        // Rotate the box 360 degrees
        duration: 2,
        
      });
    },[])


    return(<>
    <div ref={boxRef2} className="workIntro-parent">
        <div className="workIntro-txt-parent">
            <p className="workIntro-txt"><span style={{color:"darkgoldenrod"}}>Master gold currency trading with AI!</span> Enroll in expert courses now to start using our <span style={{color:"darkgoldenrod"}}>automated trading programs</span> and boost your <span style={{color:"darkgoldenrod"}}>financial future!</span></p>
            <h6 className="workIntro-txt-sayhi">say hi</h6>
            <h2 className="workIntro-txt-mail">sts@gold.com</h2>
            <h1 className="workIntro-txt-lc">Let’s collaborate</h1>
        </div>
    </div>
    </>)
}