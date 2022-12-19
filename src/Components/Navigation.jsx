import React from 'react'
import './css/Navigation.css';

const Navigation = () => {
    return (
        <div className='w-full h-screen bg-lmBg dark:bg-dmBg'>
            <div className='mx-auto px-80 flex flex-col justify-center h-full'>
                <div className='grid gap-6 grid-cols-2'>

                    <div className='Box rounded-br-2xl'>
                        <p className='text-center font-thin text-8xl uppercase text-lmText dark:text-dmText'> home </p>
                        <p className='text-4xl absolute bottom-4 right-4  uppercase text-lmText dark:text-dmText'> 01 </p>
                    </div>

                    <div className='Box rounded-bl-2xl'>
                        <p className='text-center font-thin text-8xl uppercase text-lmText dark:text-dmText'> about </p>
                        <p className='text-4xl absolute bottom-4 right-4  uppercase text-lmText dark:text-dmText'> 02 </p>
                    </div>

                    <div className='Box rounded-tr-2xl'>
                        <p className='text-center font-thin text-8xl uppercase text-lmText dark:text-dmText'> projects </p>
                        <p className='text-4xl absolute bottom-4 right-4  uppercase text-lmText dark:text-dmText'> 03 </p>
                    </div>

                    <div className='Box rounded-tl-2xl'>
                        <p className='text-center font-thin text-8xl uppercase text-lmText dark:text-dmText'> contact </p>
                        <p className='text-4xl absolute bottom-4 right-4  uppercase text-lmText dark:text-dmText'> 04 </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navigation