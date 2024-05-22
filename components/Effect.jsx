import { animate, motion } from "framer-motion"

const EffectAnimation = {
    initial: {
        top: "0%"
    },
    animate:{
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};
//calculate the revers index for staggered delay
const reverseIndex =(index)=>{
    const totalSteps = 6;
    return totalSteps -index-1;
}

const Effect = () => {
  return <>
  

  {/* render 6 motions divs
  each div will have same animation
  delay for each div is calculated dynamically

  */}
  {[...Array(6)].map((_, index)=>{
    return (
    <motion.div key={index} variants={EffectAnimation} initial="initial"
    animate="animate" exit="exit" transition = {{
        duration: 0.4,
        ease: 'easeInOut',
        delay: reverseIndex(index)*0.1,

    }}
    className="h-full w-full bg-white relative"
    />
  )})}
  </>
}

export default Effect
