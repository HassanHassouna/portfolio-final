import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {}

export default function Hero({}: Props) {

    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Hassan Hassouna",
            "Guy-who-loves-Fifa.tsx",
            "<ButLovesCodeEvenMore />"
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return <div
        className='h-screen flex flex-col space-y-8  items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img className="relative rounded-full h-32 w-32 mx-auto object-cover"
             src='https://res.cloudinary.com/dieieuuby/image/upload/v1688035951/WhatsApp_Image_2023-05-29_at_16.18.49_rs67yc.jpg'
             alt='Me'/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>Full Stack developer</h2>
            <h1 className='text-3xl lg:text-6xl font-semibold px-10 '>
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
            <Link href='#about'>
                <button className='heroButton'>About</button>
            </Link>
            <Link href='#experience'>
                <button className='heroButton'>Experience</button>
            </Link>
            <Link href='#skills'>
                <button className='heroButton'>Skills</button>
            </Link>
            <Link href='#projects'>
                <button className='heroButton'>Projects</button>
            </Link>
        </div>
    </div>
}