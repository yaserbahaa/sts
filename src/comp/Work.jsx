
import { useEffect, useRef } from "react"
import "../css/work.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";












export default function Work(){
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
              y: -400, // Animate the box 300px to the right
              // Rotate the box 360 degrees
              duration: 2,
    
        });
    })
    return(<>
    <div ref={boxRef} className="work-parent">
        <div className="slideContainer">



        <div className="slideContainerTitle">
        <h1 style={{fontSize: "97px",color:"rgb(133 133 133)"}}>Courses</h1>
        </div>

        <div className="slide1P">
        <span className="slidenumber">01</span>
        <h1 className="slideTitle"> Beggienrs</h1>
        <p className="slideTxt"> Introduction to Fundamentals <span className="slideTxtDot"></span> Hands-on Basics <span className="slideTxtDot"></span> Common Mistakes and Best Practices</p>
        <div className="slideBtn" >discuss your plan</div>
        </div>

        <div className="slide1P">
        <span className="slidenumber">02</span>
        <h1 className="slideTitle"> Traders</h1>
        <p className="slideTxt"> Fundamentals of Trading Strategies <span className="slideTxtDot"></span> Introduction to Financial Markets <span className="slideTxtDot"></span> Asset Classes <span className="slideTxtDot"></span> Understanding Risk Management and Psychology in Trading</p>
        <div className="slideBtn" >discuss your plan</div>
        </div>

        <div className="slide1P">
        <span className="slidenumber">03</span>
        <h1 className="slideTitle">Account managers</h1>
        <p className="slideTxt"> Managing Risks and Maintaining Discipline <span className="slideTxtDot"></span> Developing a Personal Trading Strategy <span className="slideTxtDot"></span> Understanding Market Analysis and Making Informed Decisions</p>
        <div className="slideBtn" >discuss your plan</div>
        </div>

        <div className="slideContainerTitle">
        <h1 style={{fontSize: "97px",color:"rgb(133 133 133)"}}>Automated Programs</h1>
        </div>

        <div className="slide1P">
        <span className="slidenumber">04</span>
        <h1 className="slideTitle"> Low risk - Gold price</h1>
        <p className="slideTxt"> Risk-Reward Ratio and Position Sizing <span className="slideTxtDot"></span> Use of Stop Loss and Take Profit Orders <span className="slideTxtDot"></span> Diversification and Asset Allocation </p>
        <div className="slideBtn" >discuss your plan</div>
        </div>

        <div className="slide1P">
        <span className="slidenumber">05</span>
        <h1 className="slideTitle">Meduim risk - News way</h1>
        <p className="slideTxt"> Swing Trading Based on Technical Analysis <span className="slideTxtDot"></span> Options Trading (Covered Calls or Spreads) <span className="slideTxtDot"></span> Fundamental Analysis and Trend Following </p>
        <div className="slideBtn" >discuss your plan</div>
        </div>

        <div className="slide1P">
        <span className="slidenumber">06</span>
        <h1 className="slideTitle"> High risk - Tow way </h1>
        <p className="slideTxt"> Range Trading in Highly Volatile Markets <span className="slideTxtDot"></span> Trend Following with High Volatility Currency Pairs <span className="slideTxtDot"></span> Leveraged Trading </p>
        <div className="slideBtn" >discuss your plan</div>
        </div>

        <div className="slideContainerTitle">
        </div>

        </div>

        </div>
    </>)
}