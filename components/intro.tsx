"use client"
import Image from 'next/image'
import React from 'react'
import profilePic from "@/public/propic-1.jpg"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa'
export default function Intro() {
    return (
        <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
            <div className='flex items-center justify-center'>
                <motion.div initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.2
                    }}>
                    <Image src={profilePic} alt='Absar Rashid Profile Picture' width={250} height={250} quality="95" priority={true}
                        className='rounded-full h-40 w-40 object-cover border-[0.2rem] border-white shadow-xl' />

                </motion.div>
            </div>
            <motion.p className='mb-10 mt-6 px-4 font-medium text-2xl !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Hi, I'm <span className='font-bold'>S.M Absar Rashid.</span> I'm a Full stack web developer with 4 years of experience in Web Apps. I enjoy working in C# with ASP.NET framework from Microsoft.
            </motion.p>
            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1
                }}
            >
                <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition'>Contact me here
                    <BsArrowRight className='opacity-80 group-hover:translate-x-1 transition' />
                </Link>
                <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer' href="/CV.pdf" download={true}>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' /></a>
                <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer' href='https://www.linkedin.com/in/absar-rashid/' target='_blank'>
                    <BsLinkedin />
                </a>
                <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.15rem] focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer' href='https://github.com/AbsarRashid' target='_blank'>
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}
