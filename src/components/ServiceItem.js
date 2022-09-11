import React from 'react'
import { Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
export default function ServiceItem({item}) {
  return (
    <Col md={4} xs={12}>
      <motion.div
          initial={{
            opacity:0,
            y:100
          }}
          viewport={{once:true}}
          whileInView={{
            opacity:1,
            y:0,
            transition:{duration:(0.64+(item.id*0.11))}

          }} className='serviceItem'>
        <div className='serviceItemTitle'>{item.title}</div>
        <div className='serviceItemDescription'>{item.description}</div>
      </motion.div>
        
    </Col>
  )
}
