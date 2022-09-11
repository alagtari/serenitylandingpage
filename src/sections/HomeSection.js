import React from 'react'
import doctorImage from '../assets/doctors.png'
import { motion  } from "framer-motion";

export default function HomeSection() {
  return (
    <div className='homeSection'>
        <motion.div
          initial={{
            opacity:0.5,
            x:150
          }}
          animate={{
            opacity:1,
            x:0,
            transition:{duration:0.64}

          }} className='homeSectionText'>
          Take the first step to care about your health care with us .
        </motion.div>
        <motion.div
          initial={{
            opacity:0.5,
            x:-150
          }}
          animate={{
            opacity:1,
            x:0,
            transition:{duration:0.6}
          }} className='homeSectionImage'>
            <img src={doctorImage} className='doctorImage' />
        </motion.div>
        
    </div>
  )
}
