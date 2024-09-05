"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Picture = () => {
  return (
    <div className="w-full h-full flex justify-center">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 1,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 1,
                        duration: 1,
                        ease: "easeOut"
                    }
                }}  
                className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] absolute"
            >
                <Image
                    src="/assets/profile.jpg"
                    priority
                    quality={100}
                    fill
                    alt=""
                    className="object-contain rounded-full" />
            </motion.div>
        </motion.div>

        {/* Cirles */}
        <motion.svg
            className="w-[300px] xl:w-[505px] h-[300px] xl:h-[505px] relative"
            fill="transparent"
            viewBox="1 1 505 505"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 1
                }
            }}
        >
            <motion.circle
                cx="253"
                cy="253"
                r="250"
                stroke="#0069ff"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                    strokeDasharray: "24 10 0 0"
                }}
                animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate: [120, 260],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
        </motion.svg>
    </div>
  )
}

export default Picture
