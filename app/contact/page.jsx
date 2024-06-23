"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt
} from "react-icons/fa"
import { toast } from "react-hot-toast"

import emailjs from "@emailjs/browser"

const contactInfo = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    field: "phone",
    value: "+2763-521-9721"
  },{
    id: 2,
    icon: <FaEnvelope />,
    field: "email",
    value: "prince.khanyile@yahoo.com"
  },{
    id: 3,
    icon: <FaMapMarkedAlt />,
    field: "address",
    value: "South africa, gauteng, johannesburg"
  },
]


const fmtKey = key => {
  if (key === "softDev") {
    return "Software Development"
  } else if (key === "fullstackDev") {
    return "Fullstack Development"
  } else if (key === "frontendDev") {
    return "Frontend Development"
  } else if (key === "backendDev") {
    return "Backend Development"
  } else if (key === "uiuxDesign") {
    return "UI/UX Design"
  } else if (key === "logoDesign") {
    return "Logo Design"
  } else {
    return ""
  }
}

const Contact = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const publicKey = process.env.NEXT_PUBLIC_PORTFOLIO_EMAIL_PUBLIC_KEY
  const serviceKey = process.env.NEXT_PUBLIC_PORTFOLIO_EMAIL_SERVICE_KEY
  const templateKey = process.env.NEXT_PUBLIC_PORTFOLIO_EMAIL_TEMPLATE_KEY

  emailjs.init({
    publicKey
  })

  const formSubmitHandler = event => {
    event.preventDefault()

    setIsLoading(true)
    setError(null)

    

    try {
      const formData = new FormData(event.currentTarget)
      
      let name = formData.get("firstname")
      let surname = formData.get("lastname")
      let email = formData.get("email")
      let phone = formData.get("phone")
      let service = formData.get("service")
      let message = formData.get("message")

      if (name === "" || surname === "" || email === "" || phone === "" || service === "" || message === "") {
        toast.error("Ops! Your fields are null.")
      } else {
        const templateParams = {
          "name": name,
          "surname": surname,
          "email": email,
          "phone": phone,
          "service": fmtKey(service),
          "message": message
        }

        if (publicKey && serviceKey && templateKey) {
          emailjs.send(
            serviceKey,
            templateKey,
            templateParams
          )
          .then(response => toast.success("Thank you, i'll get back to you!"))
          .catch(error => toast.error("Something went wrong!"))
        } else {
          console.log("process null");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
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
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={formSubmitHandler}
            >
              <h3 className="text-4xl text-accent">Interested in working together?</h3>
              <p className="text-white/40">We should queue up a time to chat. I'll buy the coffee.</p>

              {/* form control */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                />
              </div>

              <Select name="service">
                <SelectTrigger
                  className="w-full"
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="webDev">Web Development</SelectItem>
                    <SelectItem value="softDev">Software Development</SelectItem>
                    <SelectItem value="fullstackDev">Fullstack Development</SelectItem>
                    <SelectItem value="frontendDev">Front-end Development</SelectItem>
                    <SelectItem value="backendDev">Back-end Development</SelectItem>
                    <SelectItem value="uiuxDesign">UI/UX Design</SelectItem>
                    <SelectItem value="logoDesign">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="What's on your mind?"
                name="message"
              />

              {/* submit button */}
              <Button
                size="md"
                className="max-w-40"
              >
                Let's do this
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((contact) => (
                <li
                  key={contact.id}
                  className="flex items-center gap-6"
                >
                  <div
                    className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-full flex items-center justify-center"
                  >
                    <div className="text-[26px]">{contact.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/40 capitalize">{contact.field}</p>
                    <h3 className="text-xl">{contact.value}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact