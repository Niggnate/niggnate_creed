"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { FaHtml5, FaCss3, FaJava, FaJs, FaReact, FaPython, FaFlask, FaNodeJs } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiGit, SiSpringboot, SiMysql, SiJquery } from "react-icons/si"

const about = {
  title: "About me",
  description: "I'm a goal-oriented person with good interpersonal skills",
  info: [
    {
      id: 1,
      fieldName: "Name",
      fieldValue: "Prince Khanyile"
    },{
      id: 2,
      fieldName: "phone",
      fieldValue: "+2763-521-9721"
    },{
      id: 3,
      fieldName: "Experience",
      fieldValue: "6+ Years"
    },{
      id: 4,
      fieldName: "Skype",
      fieldValue: "prince.01"
    },{
      id: 5,
      fieldName: "nationality",
      fieldValue: "South African"
    },{
      id: 6,
      fieldName: "Email",
      fieldValue: "prince.khanyile@yahoo.com"
    },{
      id: 7,
      fieldName: "Freelance",
      fieldValue: "Available"
    },{
      id: 8,
      fieldName: "Languages",
      fieldValue: "English, isiZulu, seSotho"
    },
  ]
}

const experience = {
  icon: "Badge",
  title: "My experience",
  description: "I thrive on solving complex problems",
  items: [
    {
      id: 1,
      company: "Convenience IT",
      position: "Software Developer",
      duration: "2022 - present"
    },{
      id: 2,
      company: "Convenience IT",
      position: "Web Development",
      duration: "2021 - 2022"
    },{
      id: 3,
      company: "Convenience IT",
      position: "Full Stack Developer",
      duration: "2020 - 2021"
    },{
      id: 4,
      company: "Technology foundation for Community",
      position: "Backend Developer",
      duration: "2018 - 2020"
    },{
      id: 5,
      company: "Technology foundation for Community",
      position: "Frontend Developer",
      duration: "2017 - 2018"
    },
  ]
}

const education = {
  icon: "Badge",
  title: "My education",
  description: "I embrace learning and seek out demanding projects.",
  items: [
    // {
    //   id: 1,
    //   institution: "Online Course Platform",
    //   certification: "Data Sceince",
    //   duration: "2024"
    // },{
    {
      id: 2,
      institution: "Masithuthuke Holdings",
      certification: "Banking Services Advisor",
      duration: "2021"
    },
  ]
}

const skills = {
  title: "My Skills",
  description: "From sites to apps, I've got you covered!",
  skillsList: [
    {
      id: 1,
      icon: <FaHtml5 />,
      name: "html 5"
    },{
      id: 2,
      icon: <FaCss3 />,
      name: "css 3"
    },{
      id: 3,
      icon: <FaJava />,
      name: "java"
    },{
      id: 4,
      icon: <FaJs />,
      name: "javascript"
    },{
      id: 5,
      icon: <FaReact />,
      name: "react.js"
    },{
      id: 6,
      icon: <FaPython />,
      name: "python"
    },{
      id: 7,
      icon: <FaFlask />,
      name: "flask"
    },{
      id: 8,
      icon: <FaNodeJs />,
      name: "node.js"
    },
    {
      id: 9,
      icon: <SiNextdotjs />,
      name: "next.js"
    },{
      id: 10,
      icon: <SiTypescript />,
      name: "Typescript"
    },{
      id: 11,
      icon: <SiGit />,
      name: "Git"
    },{
      id: 12,
      icon: <SiSpringboot />,
      name: "SpringBoot"
    },{
      id: 13,
      icon: <SiMysql />,
      name: "Mysql"
    },{
      id: 14,
      icon: <SiJquery />,
      name: "JQuery"
    },
  ]
}
//SiTypescript, SiGit, SiSpringboot, SiMysql

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/40 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((ex) => (
                      <li
                        key={ex.id}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                      >
                        <span className="text-accent">{ex.duration}</span>
                        <h3
                          className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"
                        >
                          {ex.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* prefix dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/40">{ex.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/40 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillsList.map((skill) => (
                      <li key={skill.id}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/40 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((ed) => (
                      <li
                        key={ed.id}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                      >
                        <span className="text-accent">{ed.duration}</span>
                        <h3
                          className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"
                        >
                          {ed.certification}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* prefix dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/40">{ed.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/40 mx-auto xl:mx-0">{about.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((inf) => (
                      <li
                        key={inf.id}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/40">{inf.fieldName}</span>
                        <span className="text-xl">{inf.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume