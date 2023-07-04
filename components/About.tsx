import React from 'react'
import {motion} from "framer-motion";

type Props = {}
export default function About({}: Props) {
    const {div: Div, img: Img} = motion
    return <Div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl mx-auto items-center  justify-evenly '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <Img initial={{x: -200, opacity: 0}} transition={{duration: 1.2}} whileInView={{x: 0, opacity: 1}}
             viewport={{once: true}}
             src='https://res.cloudinary.com/dieieuuby/image/upload/v1687095077/me_cmqyyx.jpg'
             className='-mb-32 md:mb-0 flex-shrink-0 w-446 h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[30rem]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a {" "} <span
                className='underline decoration-[#F7AB0A]/50'>little</span>{" "}background</h4>
            <p className='text-base'>My name is Hassan Hassouna, I'm 27 years old and I hold a B.Sc. in Information
                Systems.
                I a
                freelance <span className='underline decoration-[#F7AB0A]/50'>Full Stack Developer</span>. During this
                period, I focused on building applications and
                websites tailored to meet the specific needs of businesses. I utilized my proficiency in technologies
                like
                React, along with my knowledge of frontend and backend development, to create scalable and responsive
                user
                interfaces. Throughout my journey, I am committed to continuous self-learning, independent
                problem-solving,
                and staying updated with the latest industry trends. </p>
        </div>
    </Div>
}