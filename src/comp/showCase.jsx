import "../css/home.css"
import { useEffect ,useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import chartGraph from '../assets/sts.mp4'



gsap.registerPlugin(ScrollTrigger);


export default function ShowCase(){
    const boxRef3 = useRef(null);
    const boxRef = useRef(null);
    const videoRef = useRef(null);


    useEffect(()=>{

        gsap.to(boxRef.current, {
            scrollTrigger: {
                trigger: boxRef.current,
                start: "top 130%", // Trigger animation when top of the box is 80% from the top of the viewport
                end: "top 30%", // End the animation when top of the box is 30% from the top of the viewport
                scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                // Show start and end markers (for debugging)
            },
    y: -335, // Animate the box 300px to the right
    // Rotate the box 360 degrees
    duration: 2,
    
});

gsap.to(boxRef3.current, {
    scrollTrigger: {
  trigger: boxRef3.current,
  start: "top 90%", // Trigger animation when top of the box is 80% from the top of the viewport
  end: "top 10%", // End the animation when top of the box is 30% from the top of the viewport
  scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  // Show start and end markers (for debugging)
},
y: -240, // Animate the box 300px to the right
// Rotate the box 360 degrees
duration: 2,

});

const videoElement = videoRef.current;

// GSAP ScrollTrigger setup
ScrollTrigger.create({
    trigger: videoElement,
    start: "top 80%", // When the top of the video is 80% from the top of the viewport
    end: "bottom 20%", // When the bottom of the video is 20% from the top of the viewport
    onEnter: () => videoElement.play(), // Play the video when it enters the viewport
    onLeave: () => videoElement.pause(), // Pause the video when it leaves the viewport
    onEnterBack: () => {
        videoElement.currentTime = 0; // Restart the video when it re-enters the viewport
        videoElement.play();
    },
    // onLeaveBack: () => videoElement.pause(), // Pause the video when scrolling back up and it leaves the viewport
});
},[])


return(<>
        <div  ref={boxRef3} className="slider-parent">
  <h1 className="slider-txt2">SHOWCASE <span className="slider-divider-dot2"></span></h1>
  <h1 className="slider-txt2">SHOWCASE <span className="slider-divider-dot2"></span></h1>
  <h1 className="slider-txt2">SHOWCASE <span className="slider-divider-dot2"></span></h1>
  <h1 className="slider-txt2">SHOWCASE <span className="slider-divider-dot2"></span></h1>
  <h1 className="slider-txt2">SHOWCASE <span className="slider-divider-dot2"></span></h1>
  <h1 className="slider-txt2">SHOWCASE <span className="slider-divider-dot2"></span></h1>
  <h1 className="slider-txt2">SHOWCASE <span className="slider-divider-dot2"></span></h1>
  <h1 className="slider-txt2">SHOWCASE <span className="slider-divider-dot2"></span></h1>
  <h1 className="slider-txt2">SHOWCASE <span className="slider-divider-dot2"></span></h1>
  <h1 className="slider-txt2">SHOWCASE <span className="slider-divider-dot2"></span></h1>
</div>
    <div ref={boxRef} className="contant-1-Parent">
    <video ref={videoRef} style={{width:"64%"}} src={chartGraph} autoPlay muted playsInline />
        {/* <p className="contant-1-txt">chart/graph showing earnings over a 2.5mon period.</p> */}
    </div>
    </>)
}