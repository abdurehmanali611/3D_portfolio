import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import Sky from '../models/Sky'
import Homeinfo from '../components/Homeinfo'
import sakura from '../../public/sakura.mp3'
import {soundoff, soundon} from '../../public/icons'

const Home = () => {

   const audioRef = useRef(new Audio(sakura))
   audioRef.current.volume = 0.4
   audioRef.current.loop = true

   const [isRotating, setRotating] = useState(false)
   const [currentstage, setcurrentstage] = useState(1)
   const [playingMusic, setplayingMusic] = useState(false)

   useEffect(() => {
         if(playingMusic) {
            audioRef.current.play()
         }else {
            audioRef.current.pause()
         }
   }, [playingMusic])
   const adjustsize = () => {
      let screenscale, screenposition, rotation

      if (window.innerWidth < 768) {
         screenscale = [0.9, 0.9, 0.9]
         screenposition = [0, -6.5, -43]
         rotation = [0.1, 4.7, 0]
      }else {
         screenscale = [1, 1, 1]
         screenposition = [0, -6.5, -43]
         rotation = [0.1, 4.7, 0]
      }

      return [screenscale, screenposition, rotation]
   }

   const adjustplane = () => {
      let screenscale, screenposition

      if (window.innerWidth < 768) {
         screenscale = [1.5, 1.5, 1.5]
         screenposition = [0, -1.5, 0]
      }else {
         screenscale = [3, 3, 3]
         screenposition = [0, -4, -4]
      }

      return [screenscale, screenposition ]
   }

   const [islandscale, islandposition, islandrotation] = adjustsize()
   const [planescale, planeposition] = adjustplane()

  return (
    <section className='w-full h-screen relative'>

      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
         {currentstage && <Homeinfo currentstage = {currentstage}/>}
      </div>

       <Canvas 
       className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
       camera={{near: 0.1, far: 1000}}
       >
          <Suspense fallback = {<Loader/>}>
              <directionalLight position={[1, 1, 1]} intensity={2}/>
              <ambientLight intensity={0.5}/>
              <hemisphereLight skyColor  = '#b1e1ff' groundColor='#000000' intensity={1}/>
               
               <Bird />
               <Sky 
               isRotating = {isRotating}
               />
              <Island 
              position = {islandposition}
              scale = {islandscale}
              rotation = {islandrotation} 
              isRotating = {isRotating}
              setRotating = {setRotating}
              setcurrentstage={setcurrentstage}
              />
              <Plane 
              scale = {planescale}
              position = {planeposition}
              isRotating = {isRotating}
              rotation = {[0,20,0]}
              />
          </Suspense>
       </Canvas>
       <div className='absolute bottom-2 left-2'>
         <img 
         src={!playingMusic ? soundoff : soundon} 
         alt="sound" 
         className='w-10 h-10 cursor-pointer object-contain'
         onClick={() => setplayingMusic(!playingMusic)}
         />
       </div>
    </section>
  )
}

export default Home