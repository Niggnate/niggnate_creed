"use client"

import navLink from '@/lib/nav-link'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const DesktopNav = () => {
  const pathname = usePathname()

  return (
    <nav className="flex gap-8">
      {navLink.map((nav) => {
        const isCurrent = nav.url === pathname
        return (
          <Link
            href={nav.url}
            key={nav.id}
            className={`${isCurrent && "text-accent border-b-2 border-accent capitalize transition-all"} hover:text-accent font-medium`}
          >
            {nav.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default DesktopNav