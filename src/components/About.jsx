import React from 'react'
import { motion } from 'framer-motion'
import './About.css'
function About(move) {
  return (
    <motion.div className='About1' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{duration:1}}>
      <div>
        <motion.img src='assets\sevalogo.png' class="sevalogo" alt="" animate={{ x: [760, -1320, 0], scale: 1 }} transition={{ duration: 0.8, delay: 1.1 }} initial={{ x: 760, scale: 0 }} />
        <p className='SEVA'>SEVA TRADERS</p></div>
      <p className='info'>
        We at Seva Traders Provide an Elite Services for businesses
      </p>
    </motion.div>
  )
}

export default About