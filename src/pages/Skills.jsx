import React from 'react'
import { motion } from "framer-motion"
import { SectionWrapper } from "../Higher_Component"
import { styles } from "../styles"
import { technologies } from "../constants"
import { slideIn } from "../motion/motion"

function Skills() {
  return (
    <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
      <h2 className={`${styles.sectionHeadText} text-stroke`}>My Skills</h2>
      <br />
      <br />
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="block-container w-20 h-20" key={technology.name}>
            <div className="ball-back rounded-xl" />
            <div className="ball-front rounded-xl flex justify-center items-center">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Skills, "")