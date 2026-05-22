"use client";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/10 backdrop-blur-xs border-b border-white/20 z-50 shadow-2xl">
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center text-white">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold hover:text-gray-300">
                    MyPortfolio
                </Link>

                {/* Hamburger button untuk HP */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden focus:outline-none"
                >
                    {/* Icon garis3 */}
                    <div className="space-y-1">
                        <span className="block w-6 h-[2px] bg-white"></span>
                        <span className="block w-6 h-[2px] bg-white"></span>
                        <span className="block w-6 h-[2px] bg-white"></span>
                    </div>
                </button>

                {/* Menu Desktop */}
                <div className="hidden md:flex gap-6">
                    <Link href="/profil" className="hover:text-gray-300">Profile</Link>
                    <Link href="/Timeline" className="hover:text-gray-300">Timeline</Link>
                    <Link href="/Education" className="hover:text-gray-300">Education</Link>
                </div>
            </div>

            {/* Menu Mobile dropdown */}
            {open && (
                <div className="md:hidden backdrop-blur-xs border-t border-white/20 text-white">
                    <div className="px-6 py-3 flex flex-col gap-3">
                        <Link href="/profil" onClick={() => setOpen(false)} className="hover:text-gray-300">
                            Profile
                        </Link>
                        <Link href="/Timeline" onClick={() => setOpen(false)} className="hover:text-gray-300">
                            Timeline
                        </Link>
                        <Link href="/Education" onClick={() => setOpen(false)} className="hover:text-gray-300">
                            Education
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
