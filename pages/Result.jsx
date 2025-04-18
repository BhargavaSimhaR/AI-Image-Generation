import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'

const Result = () => {

  const[image , setImage] = useState(assets.sample_img_1)
  const[isImageLoaded , setIsImageLoaded] = useState(false)
  const[loading , setLoading] = useState(false)
  const[input , setinput] = useState('')

  const {generateImage} = useContext(AppContext)

  const onSubmitHandler = async (e) =>{
    e.preventDefault()
    setLoading(true)

    if(input){
      const image = await generateImage(input)
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
  }

  return (
    <motion.form 
    initial={{opacity:0.2 , y:100}}
    transition={{duration:1}}
    whileInView={{opacity : 1, y : 0}}
    viewport={{once : true}}
    onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] justify-center items-center'>
    <div>
    <div className="relative">
      <img src={image} className="max-w-sm rounded" alt="Loading content" />
      <span
        className={`absolute bg-blue-500 bottom-0 left-0 h-1 
        ${loading ? "w-full transition-all duration-[10s] " : "w-0"}`}
      />
  </div>
      <p className={!loading? 'hidden' : ''}>Loading....</p>
    </div>

    {!isImageLoaded && 
    <div className='flex w-full max-w-xl bg-neutral-500 rounded-full
    text-white text-sm p-0.5 mt-10'>

      <input 
      onChange={e=>setinput(e.target.value)} value={input}
      type="text" placeholder='Describe what you want to generate'
      className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20'/>
      <button type='submit'
      className='bg-zinc-900 text-white rounded-full py-3 px-10'>Generate</button>
    </div>
    }

    {isImageLoaded &&
    <div className='flex gap-2 flex-wrap justify-center text-white
    text-sm p-0.5 mt-10 rounded-full'>
      <p onClick={()=>{setIsImageLoaded(false)}}
      className='bg-transparent border rounded-full border-zinc-900
       text-black cursor-pointer px-8 py-3'>Generate Another</p>
      <a href={image} download className='bg-zinc-900  rounded-full 
       cursor-pointer px-10 py-3'>Download</a>
    </div>
    }
    </motion.form>
  )
}

export default Result