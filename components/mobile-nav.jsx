"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import navLink from "@/lib/nav-link"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CiMenuFries } from "react-icons/ci"

const MobileNav = () => {
    const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>

        <SheetContent className="flex flex-col">
            {/* Logo */}
            <div className="mt-20 mb-20 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">Niggnate<span className="text-accent">.</span></h1>
                </Link>
            </div>

            {/* Nav */}
            <nav className="flex flex-col justify-center items-center gap-8">
                {navLink.map((nav) => {
                    const isCurrent = nav.url === pathname
                    return (
                        <Link
                            href={nav.url}
                            key={nav.id}
                            className={`${isCurrent && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
                        >
                            {nav.name}
                        </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
