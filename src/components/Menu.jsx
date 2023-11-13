"use client"

import React, {useState} from 'react'
import Image from "next/image"
import Link from 'next/link';


const links = [
    { id:1, title: "Product", url: "/" },
    { id:2, title: "Resource", url: "/" },
    { id:3, title: "Solution", url: "/" },
    { id:4, title: "Pricing", url: "/" },
    { id:4, title: "Login", url: "/" },
]

const Menu = () => {

    // Temporary
    const user = false;

    const [open, setOpen] = useState(false);
    return (
        <div className='cursor-pointer -ml-12 w-22'>
            {!open ? (
                <Image src="/open.png" alt="" width={20} height={20} onClick={()=>setOpen(true)} />
            ) :(
                <Image src="/close.png" alt="" width={20} height={20} onClick={()=>setOpen(false)} />
            )}
            {open && (
            <div className='bg-gray-500 text-white absolute top-px-30 left-0 h-[calc(100vh-4rem)] flex flex-col gap-6 w-full items-center justify-center text-3xl z-10'>
                {links.map((item) => (
                    <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>
                        {item.title}
                    </Link>
                ))}
                {/* {!user ? (
                    <Link href="/login" onClick={()=>setOpen(false)}>Login</Link>
                ) : (
                    <Link href="/orders" onClick={()=>setOpen(false)}>Orders</Link>
                )}
                <Link href="/cart" onClick={()=>setOpen(false)}><CartIcon /></Link> */}
            </div>
            )}
        </div>
  );
};

export default Menu