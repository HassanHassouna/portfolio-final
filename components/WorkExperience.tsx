import React from 'react'
import {motion} from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {}
export default function WorkExperience({}: Props) {
    const {div: Div} = motion

    return <Div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.5}}
                className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
        <div className=' flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory -mb-32'>
            <ExperienceCard/>
        </div>
    </Div>
}