import React, { useState, useEffect } from "react";
import './css/Home.css'



const Home = () => {
  return (
    <div className='w-full h-screen bg-lmBg dark:bg-dmBg'>
      <div className='mx-auto px-8 flex flex-col justify-center h-full'>
        {/* Intro */}
        <h1 className='text-6xl font-semibold uppercase text-center text-lmText dark:text-dmText tracking-wider'> Hey, I'm
          <span className='text-accentTeal bg-none italic'> Ezekial Pack</span>
          <br></br>but you can call me
          <span className='text-accentPink bg-none italic'> Zeke</span>
        </h1>

        {/* Information */}
        <h2 className='mt-4 text-2xl font-medium uppercase text-center text-lmTextDim dark:text-dmTextDim tracking-wider'>
          sr. marketing student @ east carolina university
        </h2>

        {/* Links */}
        <div className='grid grid-flow-col gap-20 mt-4 mx-auto'>
          <div className='grid grid-cols-1 gap-2'>
            <a className="text-2xl font-medium uppercase hover:text-accentYellow text-lmText dark:text-dmText tracking-wider" href="">My Projects</a>
            <p className="text-3xl mx-auto text-accentYellow">&#8593;</p>
          </div>
          <div className='grid grid-cols-1 gap-2'>
            <a className="Link text-2xl font-medium uppercase hover:text-accentYellow text-lmText dark:text-dmText tracking-wider" href="">About Me</a>
            <p className="Link text-3xl mx-auto text-accentYellow">&#8593;</p>
            {/* my-[-40px] for animation later */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home