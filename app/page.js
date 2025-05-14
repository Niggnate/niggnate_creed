"use client"

import { Picture, Socials, ProfileStats } from '@/components/index'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/lib/data'
import { FiDownload } from 'react-icons/fi'

const Home = () => {

  const downloadHandler = () => {
    window.location.href = "/assets/resume/PRINCE-KHANYILE-RESUME-PORTFOLIO.pdf"
  }

  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl mb-4">Software Developer</span>
            <h1 className="h2 mb-6">Hello, my name is <br /> <span className="text-accent">Prince Khanyile</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">{portfolioData.home.description}</p>
            
            {/* Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                className=" flex p-3 gap-3 border border-accent rounded-md justify-center items-center text-primary text-base bg-accent hover:text-accent hover:bg-primary hover:transition-all duration-500"
                href='/assets/resume/prince_khanyile_resume_software_developer.pdf'
                download
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </a>

              <div className="mb-8 xl:mb-0">
                <Socials containerStyle="flex gap-6" iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* My photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Picture />
          </div> 
        </div>
      </div>

      {/* profile stats */}
      <div>
        <ProfileStats />
      </div>
    </section>
  )
}

export default Home
