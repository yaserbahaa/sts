import '../css/goldBar3dScene.css'
import "../css/workIntro.css"
import React, { Suspense,useRef,useEffect, useState } from 'react';
import { Canvas ,useFrame,useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture,PerspectiveCamera  } from '@react-three/drei';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from './loading';


useGLTF.preload('/stsGoldBar.glb');


const CameraSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    // Set the camera's initial position
    camera.position.set(1,460,1);
    camera.lookAt(0, 0, 0); // Make the camera look at the origin
  }, [camera]);

  return null;
};
 
const Controls = () => {
  const controls = useRef(null);

  useEffect(() => {
    
    if (controls.current) {
      // Restrict vertical rotation
      controls.current.minPolarAngle = Math.PI / 2; // Prevent looking up
      controls.current.maxPolarAngle = Math.PI / 2; // Prevent looking down
      controls.current.enableZoom = false;
      controls.current.enablePan = false;

      // Allow full horizontal rotation
      controls.current.minAzimuthAngle = -Infinity;
      controls.current.maxAzimuthAngle = Infinity;
      // controls.current.autoRotateSpeed  = 0.05
      // controls.current.rotateSpeed  = 0.5
      
      
      controls.current.update();
    }
  }, [controls]);
  return <OrbitControls   ref={controls} />;

}
gsap.registerPlugin(ScrollTrigger);


export default function Model() {
  const { scene } = useGLTF('/stsGoldBar.glb',true);
  const boxRef1 = useRef(null);
  
  useEffect(()=>{

    gsap.to(boxRef1.current, {
      scrollTrigger: {
        trigger: boxRef1.current,
    // endTrigger:".test",
    // toggleActions:"restart ",
    start: "70% 50%", // Trigger animation when top of the box is 80% from the top of the viewport
    end: "3100px 85%", // End the animation when top of the box is 30% from the top of the viewport
    scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    // markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
  y: "2300px", // Animate the box 300px to the right
  x:130,
  ease: 'none',
  // duration: 2,
});


},[])

return (<>

  <div ref={boxRef1} style={{ position:"absolute",top:"140px",right:"233px",width:"40%",height:"966px" ,overflow:"visible",zIndex:"10"}}>
    <Canvas >
    <Suspense fallback={<div style={{color:"red"}}>Loading...</div>}>
      <primitive object={scene} scale={[100,100,100]} position={[1, -265, 1]}  rotation={[0, 5.399, 0]}/>
      </Suspense>
      <Controls/>
      <CameraSetup/>
    </Canvas>
  </div>

  </>
  );
}


