import React from 'react';
import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../Higher_Component"
import { slideIn } from "../motion/motion"


const About = () => {

  return (
    <>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
        <br />
        <br />
        <h2 className={`${styles.heroHeadText} text-stroke`}>About</h2>
      </motion.div>

      <motion.p
        variants={slideIn("right", "tween", 0.2, 1)}
        className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
        <br></br>
        <br></br>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
        ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about");