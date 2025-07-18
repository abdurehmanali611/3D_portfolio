import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Fox from '../models/Fox'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'

const Contacts = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef(null)
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const {alert, showAlert, hideAlert} = useAlert()

  const handleChange = (e) => {
      setForm({...form, [e.target.name]: e.target.value})
  }
  const handleFocus = () => setCurrentAnimation('walk')

  const handleBlur = () => setCurrentAnimation('idle')

  const handleSubmit = (e) => {
      e.preventDefault()
      setIsLoading(true)
      setCurrentAnimation('hit')

      emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Abdurehman',
          from_email: form.email,
          to_email: 'abdurehmanali611@gmail.com',
          message: form.message
        },
        import.meta.env.VITE_PUBLIC_KEY
      ).then(() => {
        setIsLoading(false)
        showAlert({
          show: true,
          text: 'Message sent successfully!',
          type: "success"
        })
        setTimeout(() => {
          hideAlert(false)
          setCurrentAnimation('idle')
          setForm({name: '', email: '', message: ''})

        }, [3000]);
      })
                                     
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>

      {alert.show && <Alert {...alert}/>}
        <div className='relative w-svw'>
        <div className='flex-1 min-w-[50%] flex flex-col'>
             <h1 className='head-text'>Get in Touch</h1>
         </div>
         <form 
         onSubmit={handleSubmit}
         ref={formRef}
         className='w-full flex flex-col gap-7 mt-14'
         >
            <label 
            htmlFor=""
            className='text-[--color-black-500] font-semibold'
            >
              Name
              <input 
              type="text" 
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
            </label>
            <label 
            htmlFor=""
            className='text-[--color-black-500] font-semibold'
            >
              Email
              <input 
              type="email" 
              name='email'
              className='input'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
            </label>
            <label 
            htmlFor=""
            className='text-[--color-black-500] font-semibold'
            >
              Message
              <input 
              name='message'
              rows = {4}
              className='textarea'
              placeholder='let me know if you have something to say'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
            </label>
            <button
            type='submit'
            className='btn'
            onFocus={handleFocus}
            disabled= {isLoading}
            onBlur={handleBlur}
            >
              {isLoading ? 'sending...': 'Send Message'}
            </button>
         </form>
        </div>
         <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
             <Canvas
             camera={{
              position: [0,0,5],
              fov: 75,
              near: 0.1,
              far: 1000
             }}
             >

              <directionalLight intensity={2.5} position={[0, 0, 1]}/>
              <ambientLight intensity={0.5}/>
               <Suspense fallback = {<Loader/>}/>
               <Fox 
                position = {[0.5, 0.35, 0]}
                rotation = {[12.6, -0.6, 0]}
                scale = {[0.5, 0.5, 0.5]}
                currentAnimation={currentAnimation}
               />
             </Canvas>
         </div>
    </section>
  )
}

export default Contacts