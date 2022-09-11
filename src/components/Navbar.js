import React from 'react'
import NavItem from './NavItem'
import { motion  } from "framer-motion";
export default function Navbar() {
  return (
    <motion.div
        initial={{
          opacity:0,
          y:-50
        }} 
        animate={{
          opacity:1,
          y:0,
          transition:{duration:0.7}
        }}
         className='navbarr'>
        <span className='brandLogo'>Serenity</span>
        <NavItem navText={'HOME'}/>
        <NavItem navText={'ABOUT'}/>
        <NavItem navText={'SERVICES'}/>
        <NavItem navText={'CONTACT US'}/>
    </motion.div>
  )
}
