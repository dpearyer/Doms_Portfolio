"use client";
import {easeInOut, motion} from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return <div className="w-full h-full relative">
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1, 
    transition: {delay:2, duration:0.4, ease:"easeIn"},
}}>
    {/*image */}
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, 
        transition: {delay:2.1, duration:0.4, ease:"easeInOut"},
    }}
        className="w-[298px-] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"> 
            <Image 
            src="/assets/portfolio-photo.png" 
            priority 
            quality={100} 
            fill 
            alt="profile photo" 
            className="object-contain"/>
        </motion.div>
    {/*might add effect around image */}
       
    </motion.div>
      
    </div>
  
}

export default Photo
