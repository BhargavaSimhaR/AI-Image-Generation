import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='py-3 flex items-center justify-between gap-4 
    mt-20'>
        <img src={assets.logo} width={150}/>
        {/* <p className='flex-1 border-l border-gray-400 pl-4 text-sm
        text-gray-500 max-sm:hidden'>
        Copyrigth @Greattack.de | All rigth reserved. </p> */}

        <div className='flex gap-2.5'>
          <img src={assets.facebook_icon} width={35}/>
          <img src={assets.twitter_icon} width={35}/>
          <img src={assets.instagram_icon} width={35}/>
        </div>
    </div>
  )
}

export default Footer