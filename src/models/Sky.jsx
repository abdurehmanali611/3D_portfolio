import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

import skyScene from '/3d/sky.glb'
import { useFrame } from '@react-three/fiber'

const Sky = ({isRotating}) => {

  const sky = useGLTF(skyScene)
  const skyref = useRef()

  useFrame((_, delta) => {
    if (isRotating) {
      skyref.current.rotation.y += 0.15 * delta
    }
  })

  return (
    <mesh ref={skyref}>
       <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky