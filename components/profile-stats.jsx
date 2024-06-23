"use client"

import CountUp from "react-countup"

const statsCount = [
    {
        id: 1,
        count: 6,
        text: "Years of experience"
    },
    {
        id: 2,
        count: 10,
        text: "Projects completed"
    },
    {
        id: 3,
        count: 14,
        text: "Technologies mastered"
    },
    {
        id: 4,
        count: 180,
        text: "Code commits"
    }
]

const ProfileStats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-6 xl:pb-10">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {statsCount.map((stat) => (
                    <div
                        key={stat.id}
                        className="flex flex-1 gap-4 items-center justify-center xl:justify-start"
                    >
                        <CountUp
                            end={stat.count}
                            duration={5}
                            delay={3}
                            className="text-4xl xl:text-6xl font-semibold"
                        />
                        <p
                            className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
                        >
                            {stat.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ProfileStats