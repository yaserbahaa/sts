import Model from "./goldBar3dScene";
import Navbar from "./navBar";
import WcText from "./wcText";
import ShowCase from "./showCase";
import "../css/home.css"
import Lenis from "@studio-freight/lenis";
import { useEffect ,useRef } from "react";
import AboutUs from "./aboutUs";
import WorkIntro from "./workIntro";
import Work from "./Work";
import Foot from "./foot";







export default function Home(){


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
        
       
        
        return () => {
          lenis.destroy(); // Clean up the instance on unmount
        };
        
    }, []);
    
    return(<>
    <Navbar/>
    <WcText/>
    <Model/>
    <AboutUs/>
    <WorkIntro/>
    <ShowCase/>
    <Work/>
    <Foot/>
    </>)
}