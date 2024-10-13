import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

import skyScene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber';
const Sky = ({isRotating}) => {
    
    
  const sky = useGLTF(skyScene);
  const skyRef = useRef()

  useFrame((_,delta)=>{
    if(isRotating){
      skyRef.current.rotation.y +=0.25*delta
    }
  })
  return (
    // The background have to rotate with our island
    // So we used another 3d object
    <mesh ref={skyRef}>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky