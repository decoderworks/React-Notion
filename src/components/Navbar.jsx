import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Menu from '@/components/Menu';

const Navbar = () => {

    const user = false;

  return (
    <div className='sm:h-13 text-black p-4 flex items-center justify-between border-b-2 border-b-gray-500 uppercase md:h-18 lg:px-20 xl:px-40'>
        {/* LEFT LINKS */}
        <div className='hidden md:flex gap-4'>
            <Link href="/">Product</Link>
            <Link href="/menu">Resource</Link>
            <Link href="">Solution</Link>
        </div>
        {/* LOGO */}
        <div className='text-xl font-bold flex-1 text-center md:text-center'>
        <Link href="/">Notion's</Link>
        </div>
        {/* MOBILE MENU */}
        <div className='md:hidden'>
            <Menu />
        </div>
        {/* RIGHT LINKS */}
        <div className='hidden md:flex gap-4 mr-5 items-center justify-end flex-1'>
            <div className='md:absolute top-3 md:h-10 md:w-48 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-200 px-1 rounded-md'>
                <Image src="/phone.png" alt="" width={20} height={20} />
                <span>+88 01751 8687 07</span>
            </div>
            {!user ? (
            <li className='hidden md:flex gap-4'>
                <Link href="/pricing">Pricing</Link>
            <Link href="/login">Login</Link>
            </li>
            ) : (
            <Link href="/orders">Logout</Link>
            )}
            {/* <CartIcon /> */}
        </div>
    </div>
  )
}

export default Navbar

// import Featured from '@/components/Featured'
// import React from 'react'
// import Link from 'next/link'
// import Menu from '@/components/Menu'

// const Navbar = () => {
//   return (
   
//     <div className='sm:h-24 hidden md:flex md:w-auto flex-row gap-8 pt-8 pl-28 bg-white text-black'>
//         {/* <li className='relative sm:w-12 sm:h-8 md:w-28 flex flex-row justify-center pt-1 bg-red-100 hover:bg-red-300 rounded-lg shadow'>Home</li> */}
//         <Link href="/"><li className='md:w-28 flex flex-row justify-center pt-1 bg-red-100 hover:bg-red-300 rounded-lg shadow'>Product</li></Link>
//         <Link href="/"><li className='md:w-28 flex flex-row justify-center pt-1 bg-red-100 hover:bg-red-300 rounded-lg shadow'>Resource</li></Link>
//         <Link href="/"><li className='md:w-28 flex flex-row justify-center pt-1 bg-red-100 hover:bg-red-300 rounded-lg shadow'>Solution</li></Link>
//         <Link href="/"><li className='md:w-28 flex flex-row justify-center pt-1 bg-red-100 hover:bg-red-300 rounded-lg shadow'>Pricing</li></Link>
//         <Link href="/"><li className='md:w-28 flex flex-row justify-center pt-1 bg-red-100 hover:bg-red-300 rounded-lg shadow'>Login</li></Link>
//         <div className='md:hidden'>
//           <Menu />
//       </div>
//     </div>
//   )
// }

// export default Navbar