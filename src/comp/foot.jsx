import "../css/foot.css"
import { useEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";










export default function Foot(){
    const boxRef = useRef(null);

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(boxRef.current, {
            scrollTrigger: {
                trigger: boxRef.current,
                start: "-250px 90%", // Trigger animation when top of the box is 80% from the top of the viewport
                end: "10% 90%", // End the animation when top of the box is 30% from the top of the viewport
                scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                // Show start and end markers (for debugging)
                // markers:true
            },
              y: -200, // Animate the box 300px to the right
              // Rotate the box 360 degrees
              duration: 2,
    
        });
    })



    return(<>
    <div ref={boxRef} className="footContienr">
        <div className="footPart1">
        <h4 className="footPart1T1">get in touch</h4>
        <h1 className="footPart1T2">info@sts.gold</h1>
        <h2 className="footPart1T3">STS</h2>
        </div>

        <div className="footPart2">

        <div className="footPart2TxtCon1">
        <a className="footPart2Txt">about</a>
        <a className="footPart2Txt">portfolio</a>
        <a className="footPart2Txt">expertise</a>
        <a className="footPart2Txt">contact us</a>
                <span className="footPart2Cr">
        © STSGOLD 2024
        </span>
        </div>

        <div className="footPart2TxtCon1">  
        <a className="footPart2Txt">expertise</a>
        <a className="footPart2Txt">telegram</a>
        <a className="footPart2Txt">whatsapp</a>
        <a className="footPart2Txt">x</a>
        </div>

        <div className="footPart2TxtCon3">
        <a className="footPart2Txt">linkedin</a>
        <a className="footPart2Txt">facebook</a>
        <a className="footPart2Txt">instagram</a>
        </div>



        </div>

        <span className="footEnd"></span>
    </div>
    </>)
}