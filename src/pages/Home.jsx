import React, { useState } from "react";
// use as a wrapper for the rendering screen
import { Suspense } from "react";
// allow us to use Canvas, which all 3D content will be in it
import { Canvas } from "@react-three/fiber";

import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating ,setIsRotating] = useState(false);
  const adjIslandForScreenSize = ()=>{
    let screenScale = null
    let screenPosition =  [0,-6.5,-43];
    let rotation = [0.1,4.7,0];
    if(window.innerWidth<768){
      screenScale=[0.9,0.9,0.9];
    }else{
      screenScale=[1,1,1];
    }
    return [screenScale,screenPosition,rotation]
  }
  const adjPlaneForScreenSize = ()=>{
    let screenScale,screenPosition;
    // let rotation = [0.1,4.7,0];
    if(window.innerWidth<768){
      screenScale=[1.5,1.5,1.5];
      screenPosition = [0,-1.5,-0];
    }else{
      screenScale=[3,3,3];
      screenPosition = [0,-4,-4];
    }
    return [screenScale,screenPosition]
  }


  const [islandScale,islandPosition, islandRotation] = adjIslandForScreenSize();
  const [planeScale,planePosition] = adjPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className=" absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas
        className={"w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing':'cursor-grab'}"}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[0.05,0.05,0.05]} intensity={2}/>
          <ambientLight intensity={1} />
          {/* <pointLight /> */}
          {/* <spotLight /> */}
          <hemisphereLight skyColor ='#b1e1ff' groundColor='#000000' intensity={1}/>
          <Bird/>
          <Sky isRotating = {isRotating}/>
          <Island position = {islandPosition} scale = {islandScale} rotation = {islandRotation} isRotating = {isRotating} setIsRotating ={setIsRotating} setCurrentStage={setCurrentStage}/>
          <Plane position = {planePosition} scale = {planeScale} isRotating = {isRotating} rotation ={[0,20,0]}/>
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;