import React from 'react'
import {motion} from "framer-motion";

type Props = {}

export default function ExperienceCard({}: Props) {
    const {img: Img} = motion
    return <article
        className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[980px]
        snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <Img initial={{y: -100, opacity: 0}} transition={{duration: 1.2}} whileInView={{opacity: 1, y: 0}}
             viewport={{once: true}}
             className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
             src=''
             alt=''/>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO</h4>
            <p className='font-bold text-2xl mt-1'>PAPA</p>
            <div className='flex space-x-2 my-2'>
                {/*    TECH USED*/}
                {/*    TECH USED*/}
                {/*    TECH USED*/}
            </div>
            <p>Started work... - Ended</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>
    </article>
}