import { render } from '@testing-library/react';
import React, { useEffect } from 'react'

import * as THREE from 'three';



const Home = () => {
  return (
    <div className='w-full h-screen bg-lmBg dark:bg-dmBg'>
      <div className='mx-auto px-8 flex flex-col justify-center h-full'>
        {/* Intro */}
        <h1 className='text-6xl font-semibold uppercase text-center text-lmText dark:text-dmText'> Hey, I'm
          <span className='text-accentTeal bg-none'> Ezekial Pack</span>
          <br></br>but you can call me
          <span className='text-accentPink bg-none'> Zeke</span>
        </h1>

        {/* Information */}
        <h2 className='mt-4 text-2xl font-medium uppercase text-center text-lmTextDim dark:text-dmTextDim'>
          sr. marketing student @ east carolina university
        </h2>

        {/* Links */}
        <div className='mt-4 mx-auto'>
          <a className="text-2xl font-medium uppercase mr-24 hover:text-accentYellow text-lmText dark:text-dmText" href="">My Projects</a>
          <a className="text-2xl font-medium uppercase hover:text-accentYellow text-lmText dark:text-dmText" href="">About Me</a>
        </div>
      </div>
    </div>
  )
}

export default Home