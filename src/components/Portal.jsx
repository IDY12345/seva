import { motion } from 'framer-motion'
import React,{useState,useEffect} from 'react'
import './Portal.css'
function Portal() {
  <meta name='viewport' content='width=device-width,initial-scale=1.0'/>
    const [mobile, setMobile] = useState(false);
    useEffect(() => {

        if (window.innerWidth <= 768) {
            setMobile(true);
        }
    }, []);
    useEffect(() => {
        const handleSize = () => {
            if (window.innerWidth <= 768) {
                setMobile(true);
            }
            else {
                setMobile(false);
            }
        };
        window.addEventListener("resize", handleSize);
        return () => {
            window.removeEventListener("resize", handleSize);
        }
    }, []);
  return (
  
    <motion.div className="Portal1"animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:1}}>
      <p className="Customer1">Customer-Portal</p>
    </motion.div>
    
  )
}

export default Portal