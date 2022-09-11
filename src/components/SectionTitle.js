import React from 'react'
import { motion  } from "framer-motion";

export default function SectionTitle({title,color}) {
  return (
    <motion.div
        initial={{
          opacity:0,
          y:100
        }} 
        whileInView={{
          opacity:1,
          y:0,
          transition:{duration:0.7}
        }}
        viewport={{once:true}}
       className='sectionTitle' align='center' style={{color:color}}> 
    
        <span className='sectionTitleBottomBar' style={{borderColor:color}}>{title}</span>
    </motion.div>
  )
}
