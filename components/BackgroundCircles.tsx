import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function BackgroundCircles({}: Props) {
    const {div: Div, p: P} = motion
    return <Div className='relative flex justify-center items-center'
                initial={{
                    opacity: 0
                }}
                animate={{
                    scale: [1, 2, 2, 3, 1],
                    opacity: [0.1, .2, .4, .8, .1, 1],
                    borderRadius: ["20%", "20%", "50%", "80%", "20%"]
                }}
    >
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52'/>
        <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52'/>
        <div className='absolute border border-[#F7AB0A] rounded-full h-[650px] w-[650px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52'/>
    </Div>
}