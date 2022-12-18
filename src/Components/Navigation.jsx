import React from 'react'

const Navigation = () => {
    return (
        <div className='w-full h-screen bg-lmBg dark:bg-dmBg'>
            <div className='mx-auto px-60 flex flex-col justify-center h-full'>
                <div className='grid gap-6 grid-cols-2'>

                    <div className='py-40 border-4 rounded-br-2xl'>
                        <p className='text-center text-6xl text-lmText dark:text-dmText'> Title </p>
                    </div>

                    <div className='py-40 border-4 rounded-bl-2xl'>
                        <p className='text-center text-6xl text-lmText dark:text-dmText'> Title </p>
                    </div>

                    <div className='py-40 border-4 rounded-tr-2xl'>
                        <p className='text-center text-6xl text-lmText dark:text-dmText'> Title </p>
                    </div>

                    <div className='py-40 border-4 rounded-tl-2xl'>
                        <p className='text-center text-6xl text-lmText dark:text-dmText'> Title </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation