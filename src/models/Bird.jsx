import React, { useEffect, useRef } from 'react'
import birdScrene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
const Bird = () => {
    const {scene,animations} = useGLTF(birdScrene)
    const birdRef = useRef()
    const {actions} = useAnimations(animations,birdRef)
    useEffect(()=>{
      actions['Take 001'].play()
    },[])
    useFrame(({clock,camera})=>{
  
      //update the y position simulate the flight moveing in a sine wave
      // clock.elapsedTime => trace by the total run time of the clock(website)
      birdRef.current.position.y  = Math.sin(clock.elapsedTime) * 0.2+2
      
      // bird depends on the island, which is the camera
      // check if the bird reached a certain end point relative to the camera
      if(birdRef.current.position.x>camera.position.x+10){
        //change direction to backward and rotate the bird 180 degrees on the y-axis
        birdRef.current.position.y  = Math.PI
      }else if (birdRef.current.position.x<camera.position.x-10){
        //change direction to forward and reet the bird's rotation
        birdRef.current.position.y  = 0
      }


      //Update X and Z positions based on the direction
      if(birdRef.current.rotation.y === 0){
        // Moving forward
        birdRef.current.position.x +=0.01
        birdRef.current.position.z -=0.01
      }else{
        // Moving backward
        birdRef.current.position.x -=0.01
        birdRef.current.position.z +=0.01
      }
    })
    return (
    <mesh 
      ref={birdRef} 
      position={[-5,2,1]} 
      scale={[0.003,0.003,0.003]}
    >
        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird