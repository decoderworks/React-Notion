import Link from 'next/link'
import Image from 'next/image'
import React from 'react'


const Third = () => {
  return (
    <div className='mb-5 pt-5 grid bg-white items-center justify-center text-black'>
        <h1 className='sm:ml-9 text-5xl sm:text-3xl font-bold md:ml-64'>Millions run on Notion every day</h1>
        <p className='sm:text-base sm:ml-9 text-xl md:ml-64'>Powering the world's best teams, from next generations startups</p>
        <p className='sm:text-base sm:ml-9 text-xl md:ml-64'>to established enterprises.</p>
        <Link className='sm:text-base sm:ml-24 text-xl md:ml-64 text-blue-600 md:ml-36' href="/">Read customer stories →</Link>
        <div className=''>
        <Image src="/brand.png" width={1114} height={266} />
        </div>
    </div>
  )
}

export default Third