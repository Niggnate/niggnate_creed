import Link from "next/link"
import { DesktopNav, MobileNav } from "./index"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">

            {/* Logo setup */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Niggnate<span className="text-accent">.</span>
                </h1>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-8">
              <DesktopNav />
              <Link href="/contact">
                <Button>Hire Me</Button>
              </Link>
            </div>

            {/* Mobile Nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header