"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
    { url: "/", title: "Home"},
    { url: "/About", title: "About"},
    { url: "/Portfolio", title: "Portfolio"},
    { url: "/Contact", title: "Contact"}
]

const Navbar = () => {

    const [open,SetOpen] = useState(false)
    return (
        
        <div className="h-full flex items-center justify-between px- sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* HORIZONTAL MENU */}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link => (
                    <Link href={link.url} key={link.title}> {link.title}</Link>
                ))}
            </div>

            {/* LOGO */}
            <div className="md:hidden lg:flex w-1/3 justify-center">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1">
                        GOTE
                    </span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
                        .dev
                    </span>
                </Link>
            </div>
            
            {/* SOCIAL MEDIA LINKS */}
            <div className="hidden md:flex gap-4 w-1/3">
                <Link href="https://github.com/Beasty786">
                    <Image src="/github.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="https://github.com/Beasty786">
                    <Image src="/instagram.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="https://github.com/Beasty786">
                    <Image src="/facebook.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="https://github.com/Beasty786">
                    <Image src="/linkedin.png" alt="" width={24} height={24}/>
                </Link>
            </div>
            {/* Responsive Menu */}
            <div className="md:hidden"> 
                {/* Menu Button */}
                <button className="w-10 h-8 flex  flex-col justify-between z-50 relative" 
                        onClick={() => SetOpen(!open)}>
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                </button>
                {/* MENU LIST */}

                { open && (
                    <div className=" absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
                        {links.map(link => (
                            <Link href={link.url} key={link.title}> {link.title}</Link>
                        ))}
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar;