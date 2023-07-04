import React from 'react';
import {SocialIcon} from "react-social-icons";
import {motion} from 'framer-motion'
import Link from "next/link";

type Props = {}

export default function Header({}: Props) {
    const {div: Div, p: P} = motion
    return (
        <header
            className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <Div className='flex flex-row items-center' animate={{
                x: 0, opacity: 1, scale: 1
            }}
                 initial={{
                     x: -500, opacity: 0, scale: 0.5
                 }}
                 transition={{
                     duration: .8
                 }}
            >
                <SocialIcon fgColor='gray' bgColor='transparent'
                            target='_blank'
                            url="https://www.linkedin.com/in/hassan-hassouna-full-stack-developer/"/>
                <SocialIcon fgColor='gray' bgColor='transparent' target='_blank'
                            url="https://github.com/hassanhassouna"/>
            </Div>
            <Div animate={{
                x: 0, opacity: 1, scale: 1,
            }} initial={{
                x: 500, opacity: 0, scale: 0.5
            }} transition={{
                duration: .8,
            }} className='fledx flex-row items-center text-gray-300'>
                <Link href='#contact'>
                    <SocialIcon className='cursor-pointer' fgColor='gray' bgColor='transparent' network='email'/>
                </Link>
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
            </Div>
        </header>
    )
}