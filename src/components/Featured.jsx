import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className=''>
        <hr></hr>
        {/* Your wiki, docs & projects. Together
Notion is the connected workspace where better, faster work happens. Now with AI */}
    <div className='grid grid-rows-3 divide-x bg-white items-center justify-center'>
    <div className='sm:ml-6 md:text-8xl md:ml-36 md:h-32 mt-1 text-black font-bold sm:text-7xl sm:mt-1'>
        <p>Your wiki, docs & projects. Together</p>
    </div>
    <div className=''>
    <p className='sm:ml-5 md:pl-12 items-center justify-center text-black sm:text-lg sm:mb-1 md:-mt-1 md:ml-28 md:text-2xl'>Notion is the connected workspace where better, faster work happens. Now with AI</p>
    {/* <div className='relative object-center mt-2 m-96 w-40 h-10 rounded bg-black text-white grid flex-grid items-center justify-center'>
    
    </div> */}
   {/* <button className='sm:mb-1 sm:ml-32 flex flex-col items-center justify-center bg-black w-40 h-10 text-white rounded-full md:ml-96'>Get Notion free →</button> */}
   <div className='grid place-items-center'>
   <button class="bg-black text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center">Get Notion free →</button>
   </div>
    {/* <button className='md:mr-36 mt-2 sm:mb-2 sm:ml-56 w-40 h-10 rounded bg-black text-white grid flex-grid items-center justify-center'>Get Notion free →</button> */}
    </div>
    
    <Image className='sm:ml-18 sm:pb-0 flex flex-col h-auto max-w-full rounded-lg md:ml-72 md:w-1/2'
      src="/home-hero.webp"
      width={500}
      height={500}
      alt="Picture of the author" /> 
    <Image className='sm:ml-18 sm:pt-0 h-auto max-w-full rounded-lg md:ml-72 md:w-1/2'
      src="/sidekick-desktop-app.png"
      width={500}
      height={500}
      alt="Picture of the author" /> 
    {/* <Image className='sm:mt-8 sm:ml-24 mt-12 ml-96 w-1/2 grid items-center justify-center border-solid border-gray-800'
      src="/sidekick-desktop-app.png"
      width={500}
      height={500}
      alt="Picture of the author" />  */}

        </div>
        
    </div>
  )
}

export default Featured