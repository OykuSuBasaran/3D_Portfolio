import React from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { HobbyCanvas } from "./canvas";
import { SectionWrapper } from '../hoc';

const Hobbies = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute insert-- top-[120px] max-w-7xl 
        mx-auto flex flex-row items-start gap-5`}>
            <div className='flex flex-col justify-center items-center mt-5'>
                <div className='w-5 h-5 rounded-full bg-[#990000]'/>
                <div className='w-1 sm:h-80 h-40 bordeaux-gradient'/>
            </div>

            <div>
                <h1 className={`${styles.heroHeadText} text-[#e4d1be]`}>Hobbies</h1>
                <p className={`${styles.heroSubText} mt-2 text-[#e4d1be]`}>
                I'm a trap shooter since 2016 <br className='sm:block hidden'/>and a paragliding pilot since 2021. 
                </p>
            </div>
        </div>

        <HobbyCanvas/>
 
    </section>
  )
}

export default SectionWrapper(Hobbies, "");
