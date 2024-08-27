import '../css/goldBar3dScene.css'
import React, { Suspense,useRef,useEffect } from 'react';
import { Canvas ,useFrame,useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture,PerspectiveCamera  } from '@react-three/drei';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";




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
      // controls.current.minAzimuthAngle = -Infinity;
      // controls.current.maxAzimuthAngle = Infinity;
      // controls.current.autoRotateSpeed  = 0.1
      controls.current.rotateSpeed  = 0.5


      controls.current.update();
    }
  }, [controls]);
  return <OrbitControls ref={controls} />;

}

gsap.registerPlugin(ScrollTrigger);

export default function Model() {
  const { scene } = useGLTF('/test3.glb');
  const boxRef2 = useRef(null);

  useEffect(()=>{
    gsap.to(boxRef2.current, {
      scrollTrigger: {
    trigger: boxRef2.current,
    start: "bottom 93%", // Trigger animation when top of the box is 80% from the top of the viewport
    end: "bottom 20%", // End the animation when top of the box is 30% from the top of the viewport
    scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    // markers:true// Show start and end markers (for debugging)
},
  y: 1300, // Animate the box 300px to the right
  x:115,
  ease: 'none',
  // Rotate the box 360 degrees
  // rotateY:360,
  duration: 2,
  
});
  },[])
  
  return (<>
  <div ref={boxRef2}  style={{position:"absolute",zIndex:"10", right:"233px",top:"0px",width:"40%",height:"966px" ,overflow:"visible"}}>
    <Canvas >
      <Suspense fallback={null}>
      <primitive object={scene} scale={[100,100,100]} position={[1, -265, 1]}  rotation={[0, 5.2, 0]}/>
      {/* <primitive object={scene} scale={[100,100,100]} position={[1, -250, 1]}  rotation={[0, 5, 0.45]}/> */}
      </Suspense>
      <Controls/>
      <CameraSetup/>
    </Canvas>
  </div>
  </>
  );
}
