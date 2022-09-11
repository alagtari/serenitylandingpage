import React from 'react'
import phone from '../assets/phone.png'
import { motion  } from "framer-motion";

export default function ABoutItem() {
  return (
    <div className='aboutItem'>
        <motion.div
          initial={{
            opacity:0,
            y:100
          }}
          viewport={{once:true}}
          whileInView={{
            opacity:1,
            y:0,
            transition:{duration:0.55}

          }} className='aboutItemImage'>
          <img src={phone} style={{width:'30vw'}}/>
        </motion.div>
        <div className='aboutItemText'>
        <motion.div
          initial={{
            opacity:0,
            y:100
          }}
          viewport={{once:true}}
          whileInView={{
            opacity:1,
            y:0,
            transition:{duration:0.64}

          }}
           className='aboutItemTitle'>
          Over all <span className='highlighted'>2500</span> doctor from <br/><span className='highlighted'>20</span> country
        </motion.div>
        <motion.div
          initial={{
            opacity:0,
            y:100
          }}
          viewport={{once:true}}
          whileInView={{
            opacity:1,
            y:0,
            transition:{duration:0.64}

          }}
           className='aboutItemDescription'>
          Since the pandemic has exacerbated , no one can deny how beneficial it would be to have access to a service that provides mental health first aid at the press of a button wherever.
          </motion.div>
        </div>
    </div>
  )
}
