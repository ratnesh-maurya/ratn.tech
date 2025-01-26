
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, Presentation, BookMarked, Images } from "lucide-react"

export default function Header() {
    const [currentTime, setCurrentTime] = useState("")

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const hours = now.getHours().toString().padStart(2, "0")
            const minutes = now.getMinutes().toString().padStart(2, "0")
            const seconds = now.getSeconds().toString().padStart(2, "0")
            setCurrentTime(`${hours}:${minutes}:${seconds}`)
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div className="bg-red-500  text-center text-white">
                <p>Redesigning  the whole Portfolio. Work in Progress....</p>
            </div>
            {/* Desktop Header */}
            <header className=" sticky top-0 z-50 font-sans hidden md:block text-black  mt-2">

                <div className=" ">
                    <div className=" mx-auto px-4 sm:px-6 ">
                        <div className="flex items-center justify-between h-16">
                            <div className=" text-sm">Asia/India</div>

                            <nav className="flex items-center  gap-2">
                                <div className="flex items-center bg-teal-400/15 backdrop-blur-md rounded-full border-2 border-teal-700 px-4 py-2 gap-4">
                                    <Link href="/" className="text-black-300 hover:text-emerald-800 flex items-center gap-2 transition-colors">
                                        <Home size={18} />
                                        <span>Home</span>
                                    </Link>
                                    <Link
                                        href="/projects"
                                        className="text-black-300 hover:text-emerald-800  flex items-center gap-2 transition-colors"
                                    >
                                        <Presentation size={18} />
                                        <span>Project</span>
                                    </Link>
                                    <Link
                                        href="/blogs"
                                        className="text-black-300 hover:text-emerald-800  flex items-center gap-2 transition-colors"
                                    >
                                        <BookMarked size={18} />
                                        <span>Blogs</span>
                                    </Link>
                                    <Link
                                        href="/gallery"
                                        className="text-black-300 hover:text-emerald-800  flex items-center gap-2 transition-colors"
                                    >
                                        <Images size={18} />
                                        <span>Gallery</span>
                                    </Link>
                                </div>
                            </nav>

                            <div className="text-black-300 text-sm tabular-nums">{currentTime}</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="fixed w-full z-50 md:hidden px-4 bottom-8">
                <nav className="flex items-center justify-center">
                    <div className="flex items-center  bg-teal-400/15 backdrop-blur-md rounded-full border-2 border-teal-700 px-6 py-3 gap-8">
                        <Link href="/" className="text-black-300 hover:text-emerald-800  transition-colors">
                            <Home size={20} />
                        </Link>
                        <Link href="/projects" className="text-black-300 hover:text-emerald-800  transition-colors">
                            <Presentation size={20} />
                        </Link>
                        <Link href="/blogs" className="text-black-300 hover:text-emerald-800  transition-colors">
                            <BookMarked size={20} />
                        </Link>
                        <Link href="/gallery" className="text-black-300 hover:text-emerald-800  transition-colors">
                            <Images size={20} />
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

