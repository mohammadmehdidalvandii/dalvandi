import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <section className="block bg-primary drop-shadow-md drop-shadow-shadows text-white">
        <nav className="flex flex-col sm:flex-row justify-between items-center p-6">
            <span className="block font-roboto-black text-2xl font-black select-none mb-2">
                My Portfolio
            </span>
            <ul className="flex gap-3 sm:gap-6 ">
              <li>
                <Link href='/Home' className='link linkActive'>Home</Link>
              </li>
              <li>
                <Link href='/AboutMe' className='link' >About Me</Link>
              </li>
              <li>
                <Link href='/Projects' className='link' >Projects</Link>
              </li>
              <li>
                <Link href='/Contact' className='link' >Contact</Link>
              </li>
            </ul>
        </nav>
    </section>
  )
}

export default Navbar