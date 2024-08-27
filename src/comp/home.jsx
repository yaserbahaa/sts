import Model from "./goldBar3dScene";
import Navbar from "./navBar";
import WcText from "./wcText";
import "../css/home.css"
import chartGraph from '../assets/sts.mp4'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useEffect ,useRef } from "react";

gsap.registerPlugin(ScrollTrigger);





export default function Home(){
  const boxRef = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const videoRef = useRef(null);
  
  useEffect(() => {
    
    // make scrolling smooth 
        const lenis = new Lenis({
            duration: 1.2, // duration of the smooth scroll (in seconds)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
            smooth: true, // enable smooth scrolling
          });
        
          const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
          };
        
          requestAnimationFrame(raf);
        
          
          gsap.to(boxRef.current, {
              scrollTrigger: {
            trigger: boxRef.current,
            start: "top 80%", // Trigger animation when top of the box is 80% from the top of the viewport
            end: "top 30%", // End the animation when top of the box is 30% from the top of the viewport
            scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            // Show start and end markers (for debugging)
        },
          y: -180, // Animate the box 300px to the right
          // Rotate the box 360 degrees
          duration: 2,
          
        });
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
          gsap.to(boxRef3.current, {
              scrollTrigger: {
            trigger: boxRef3.current,
            start: "top 80%", // Trigger animation when top of the box is 80% from the top of the viewport
            end: "top 30%", // End the animation when top of the box is 30% from the top of the viewport
            scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            // Show start and end markers (for debugging)
        },
          y: -100, // Animate the box 300px to the right
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


    
        
        return () => {
          lenis.destroy(); // Clean up the instance on unmount
        };
        
    }, []);
    
    return(<>
    <Navbar/>
    <WcText/>
    <Model/>


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
“We are a small team of experts from Ukraine, specializing in developing modern products that push the boundaries of design. We help small businesses, startups, and other brands to grow and win by turning ideas into functional solutions.

We closely collaborate with our clients to understand the needs and goals of the product, as communication is the key to the success of any project.“</p>
    </div>


    <div ref={boxRef3}  className="slider-parent">
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
        <p className="contant-1-txt">chart/graph showing earnings over a 2.5mon period.</p>
    </div>
    </>)
}