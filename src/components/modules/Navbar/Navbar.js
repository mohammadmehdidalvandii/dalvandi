"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

function Navbar() {
  const [activeLink , setActiveLink] = useState('/');
  const pathName = usePathname();

  useEffect(()=>{
    const location = pathName
    setActiveLink(location)
  },[pathName])


  return (
    <section className="block bg-primary drop-shadow-md drop-shadow-shadows text-white">
        <nav className="flex flex-col sm:flex-row justify-between items-center p-6">
            <span className="block font-roboto-black text-2xl font-black select-none mb-2">
                My Portfolio
            </span>
            <ul className="flex gap-3 sm:gap-6 ">
              <li>
                <Link href='/' className={activeLink === '/' ? 'link linkActive': 'link'}>Home</Link>
              </li>
              <li>
                <Link href='/AboutMe' className={activeLink === '/AboutMe' ? 'link linkActive': 'link'} >About Me</Link>
              </li>
              <li>
                <Link href='/Projects' className={activeLink === '/Projects' ? 'link linkActive': 'link'}>Projects</Link>
              </li>
              <li>
                <Link href='/ContactMe' className={activeLink === '/ContentMe' ? 'link linkActive': 'link'} >Contact</Link>
              </li>
            </ul>
        </nav>
    </section>
  )
}

export default Navbar