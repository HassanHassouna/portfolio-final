import React from 'react'
import {motion} from 'framer-motion'
import Skill from "./Skill";
import {skillsSrc} from './skill.consts'

type Props = {}

export default function Skills({}: Props) {
    const {div: Div} = motion

    return <Div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for
            proficiency</h3>

        <div className='grid grid-cols-3 xl:grid-cols-4 gap-5 pt-24'>
            {
                skillsSrc.map((skill, index) => <Skill key={index} src={skill.src} pro={skill.pro}/>)
            }
        </div>
    </Div>
}