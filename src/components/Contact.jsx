import { motion } from 'framer-motion'
import React,
{useState,useEffect} from 'react'
import './Contact.css'
function Contact() {
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
    <nav>
    {!mobile &&
    (<motion.div className= "Contact1" animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:1}}>
        <p className="Info">Contact</p>
    </motion.div>)
    }

    {
      mobile &&
      (
        <div className='Contact-Mobile'>
          <h1 className='Coming'>Coming Soon</h1>
          <img src='assets\sevalogo.png' className='seva-logo' alt='' />
        </div>
      )
    }
    </nav>
  )
}

export default Contact