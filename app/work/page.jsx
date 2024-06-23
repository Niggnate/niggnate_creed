"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import Image from "next/image"
import { SliderButtons } from "@/components/index"

const projects = [
  {
    id: 1,
    count: "01",
    category: "Fullstack",
    title: "ImgShare: Social application",
    stack: [
      {
        id: 1,
        name: "TS"
      },{
        id: 2,
        name: "React"
      },{
        id: 3,
        name: "Appwrite"
      },
    ],
    image: "/assets/work/imgshare.png",
    live: "",
    github: "https://github.com/Niggnate/imgshare"
  },{
    id: 2,
    count: "02",
    category: "Frontend",
    title: "Portfolio website",
    stack: [
      {
        id: 1,
        name: "Javascript"
      },{
        id: 2,
        name: "Next.js"
      },{
        id: 3,
        name: "tailwind"
      }
    ],
    image: "/assets/work/portfolio.png",
    live: "",
    github: ""
  },{
    id: 3,
    count: "03",
    category: "Software dev",
    title: "Toccess: Desktop Application",
    stack: [
      {
        id: 1,
        name: "Java"
      },{
        id: 2,
        name: "Css"
      }
    ],
    image: "/assets/work/toccess.png",
    live: "",
    github: "https://github.com/Niggnate/toccess"
  }
]

const Work = () => {
  const [project, setProject] = useState(projects[0])


  const handleSlideChange = (swiper) => {
    const currentIdx = swiper.activeIndex
    setProject(projects[currentIdx])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.5,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.count}
              </div>

              {/* category */}
              <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project.category} project
              </h2>

              {/* description */}
              <p
                className="text-white/40"
              >
                {project.title}
              </p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((st, idx) => (
                  <li key={st.id} className="text-xl text-accent xl:text-wrap">
                    {st.name}
                    {idx !== project.stack.length -1 && ","}
                  </li>
                ))}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* button */}
              <div className="flex items-center gap-4">
                {/* Live button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                      >
                        <BsArrowUpRight
                          className="text-white text-3xl group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live projects</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub
                          className="text-white text-3xl group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id} className="w-full">
                  <div
                    className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"
                  >
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <SliderButtons
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                buttonStyle="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyle=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work