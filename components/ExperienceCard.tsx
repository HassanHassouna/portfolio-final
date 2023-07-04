import React from 'react'
import {motion} from "framer-motion";
import {experience} from "./experience.const";

type Props = {}

export default function ExperienceCard({}: Props) {
    const {img: Img} = motion
    return <article
        className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[100vw] md:w-[600px] xl:w-[980px]
        snap-center bg-[#292929] p-10  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <div className='px-0 md:px-10'>
            {
                experience.map((exp, index) => (
                    <>
                        <h4 className='text-4xl font-light'>{exp.title}</h4>
                        <p className='font-bold text-2xl mt-1'>{exp.company}</p>
                        <p>{exp.date}</p>
                        <ul className='list-disc space-y-4 ml-5 text-lg'>
                            {
                                exp.summaryPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))
                            }
                        </ul>
                    </>
                ))
            }
        </div>
    </article>
}