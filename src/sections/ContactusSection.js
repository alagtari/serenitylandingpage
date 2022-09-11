import React from 'react'
import backgroundImage2 from '../assets/footer2.png'
import backgroundImage from '../assets/footer.webp'
import SectionTitle from '../components/SectionTitle'
import { FaLinkedin,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';
import { motion } from 'framer-motion';
export default function ContactusSection() {
  const width = window.innerWidth
  return (
    <div className='contactSection' style={{ backgroundImage: `url(${width>992?backgroundImage:backgroundImage2})`  }}>
        <SectionTitle title={'CONTACT US'} color={width<992&&'white'}/>
        <motion.div
        initial={{
          opacity:0,
          y:40
        }}
        viewport={{once:true}} 
        whileInView={{
          opacity:1,
          y:0,
          transition:{duration:0.7}
        }}
         className='social' >
            <span className='contactText'>Contact us on social media : </span>
            <span className='socialIcons'>
            <div className='iconBox'><FaFacebook style={{color:'white',marginTop:'20%',marginLeft:'20%'}} size={30}/></div>
            <div className='iconBox'><FaTwitter style={{color:'white',marginTop:'20%',marginLeft:'20%'}} size={30}/></div>
            <div className='iconBox'><FaInstagram style={{color:'white',marginTop:'20%',marginLeft:'20%'}} size={30}/></div>
            <div className='iconBox'><FaLinkedin style={{color:'white',marginTop:'20%',marginLeft:'20%'}} size={30}/></div>
            </span>
        </motion.div>
        <motion.div
        initial={{
          opacity:0,
          y:40
        }}
        viewport={{once:true}} 
        whileInView={{
          opacity:1,
          y:0,
          transition:{duration:0.7}
        }}
         className='copyrights'>© Created By<b style={{marginLeft:5}}>Ala Gtari</b> 
        </motion.div>
    </div>
  )
}
