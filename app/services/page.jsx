"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowDownRight } from "react-icons/bs"

const servicesRendered = [
  {
    id: 1,
    count: "01",
    title: "Web Development",
    description: "Passionate web developer with expertise in front-end design, brand identity, and graphics. Explore my projects and see how I create beautiful, responsive web apps.",
    url: ""
  },
  {
    id: 2,
    count: "02",
    title: "Software Development",
    description: "Seasoned software developer with years of experience. Discover how I help clients achieve their goals through innovative solutions and mastery of animation.",
    url: ""
  },{
    id: 3,
    count: "03",
    title: "Frontend Development",
    description: "Frontend enthusiast skilled in creating visually appealing and user-friendly interfaces. Explore my work and see how I blend creativity with functionality.",
    url: ""
  },{
    id: 4,
    count: "04",
    title: "Backend Development",
    description: "Backend wizard adept at building robust, scalable systems. Dive into my projects to see how I handle data, APIs, and server-side logic.",
    url: ""
  },{
    id: 5,
    count: "05",
    title: "Fullstack Development",
    description: "Fullstack developer bridging the gap between frontend and backend. Explore my comprehensive skill set and see how I create end-to-end solutions.",
    url: ""
  },
  {
    id: 6,
    count: "06",
    title: "Logo Design",
    description: "Passionate logo designer with an eye for aesthetics. Discover my unique approach to branding and how I create memorable visual identities.",
    url: ""
  },
  {
    id: 7,
    count: "07",
    title: "UI/UX Design",
    description: "UI/UX designer crafting delightful user experiences. Explore my wireframes, prototypes, and case studies to see how I solve design challenges.",
    url: ""
  }
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1.5,
              duration: 0.4,
              ease: "easeIn"
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {servicesRendered.map((service) => (
            <div
              key={service.id}
              className="flex flex-1 flex-col justify-center gap-6 group"
            >
              {/* top view */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.count}
                </div>
                <Link
                  href={service.url}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              {/* Header */}
              <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"
              >
                {service.title}
              </h2>

              {/* sub-header */}
              <p className="text-white/40">{service.description}</p>

              {/* border */}
              <div className="border-b border-white/20 w-full">
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services