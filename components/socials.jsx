import Link from "next/link"
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa"

const socialsLinks = [
    {id: 1, icon: <FaGithub />, url: "https://github.com/niggnate"},
    {id: 2, icon: <FaLinkedin />, url: "https://www.linkedin.com/in/prince-khanyile-8301a2189/"},
    {id: 3, icon: <FaTwitter />, url: "https://x.com/niggnatecreed"},
    {id: 4, icon: <FaYoutube />, url: "https://www.youtube.com/channel/UC8fpaoajiQooF5f5diHgmgQ"}
]

const Socials = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
        {socialsLinks.map((link) => (
            <Link key={link.id} href={link.url} target="_blank" className={iconStyle}>
                {link.icon}
            </Link>
        ))}
    </div>
  )
}

export default Socials