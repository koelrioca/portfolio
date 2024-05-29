import React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { styles } from "../styles"
import Spline from "@splinetool/react-spline"
import sci_fi_harmonic from "../assets/sci_fi_harmonic.mp3"
import { soundoff, soundon } from "../assets"

/*Sound Effect by <a href="https://pixabay.com/de/users/gregorquendel-19912121/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=116790">Gregor Quendel</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=116790">Pixabay</a> */

const Hero = () => {
  const audioRef = useRef(new Audio(sci_fi_harmonic))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true

  const [isPlayingMusic, setIsPlayingMusic] = useState(false)

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play()
    }

    return () => {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])

  return (
    <section className={`relative w-full h-screen my-auto`}>
      <div
        className={`${styles.paddingY} inset-0 top-[120px]
            max-w-7x1 my-auto flex flex-col items-center gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5" />
        <div>
          <h1 className={`${styles.heroHeadText} text-center text-white`}>
             Ipsum<span className="text-stroke">Lorem</span>!
          </h1>
          <p className={`${styles.heroSubText} m-2 text-center text-white`}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
          <motion.div>
            <Spline scene="https://prod.spline.design/LHJfEe4lSI0JFBaW/scene.splinecode" />
          </motion.div>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white-100 flex justify-center items-center p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white-100 mb-1"
            />
          </div>
        </a>
      </div>
      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="space sound"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="mx-5 w-20 h-15 cursor-pointer object-contain"
        />
      </div>
    </section>
  )
}

export default Hero;