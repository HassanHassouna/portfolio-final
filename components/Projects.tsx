import React from 'react'
import {PROJECTS} from './projects.consts'
import {motion} from 'framer-motion'
import Link from "next/link";

type Props = {}

export default function Projects({}: Props) {
    const {div: Div, p: P, img: Img} = motion
    return (
        <Div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.4}}
            className='md:h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-24'>
                {
                    PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                            <Img
                                initial={{opacity: 0, y: -300}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 1.2}}
                                viewport={{once: true}}
                                src={project.image}
                                alt={''}
                                className='h-64  object-contain'
                            />


                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='text-4xl font-semibold text-center'>
                                    <span
                                        className='underline decoration-[#F7AB0A]/50'>Case Study {index + 1} of {PROJECTS.length}:</span> {project.name}
                                </h4>
                                <p className='text-lg text-center md:text-left w-screen md:w-full'>
                                    {project.description}
                                </p>
                            </div>
                            <Link target='_blank' href={project.link}>
                                <button className='heroButton'>
                                    <span className='text-[#F7AB0A]'>View Case Study</span>
                                </button>
                            </Link>
                        </div>
                    ))
                }
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
        </Div>
    )
}