"use client";

import { BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';

const skills =[
  {
    num: '01',
    title:'Python',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel iure voluptate dolorem voluptatum disti',
    href:""
  },
  {
    num: '02',
    title:'Java',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel iure voluptate dolorem voluptatum disti',
    href:""
  },
  {
    num: '03',
    title:'ReactJS/NextJS',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel iure voluptate dolorem voluptatum disti',
    href:""
  },
  {
    num: '04',
    title:'AWS Cloud Data Engineering',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel iure voluptate dolorem voluptatum disti',
    href:""
  },
  {
    num: '05',
    title:'Flutter Mobile Development',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel iure voluptate dolorem voluptatum disti',
    href:""
  },
  {
    num: '05',
    title:'HTML/CSS/Javascript',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel iure voluptate dolorem voluptatum disti',
    href:""
  },
  {
    num: '05',
    title:'Databases',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel iure voluptate dolorem voluptatum disti',
    href:""
  },
  
]

import {motion} from "framer-motion";


const Skills = () => {
  return <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div 
      initial={{opacity:0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration:0.4, ease: "easeIn"},
        }}
        >
          {skills.map((skill, index)=>{
            return <div key={index}>
              {/*top */}
              <div>
              <div>{skill.num}</div>
              <Link href={skill.href}>
                <BsArrowDownRight/>
              </Link>
            </div>
            {/*title*/}
            <h2>{skill.title}</h2>
            {/*description */}
            <p>{skill.description}</p>
            {/*border */}
            <div className="border-b border-white/20 w-full"></div>
            </div>
          })}
        </motion.div>
    </div>
  </section>
  
}

export default Skills
