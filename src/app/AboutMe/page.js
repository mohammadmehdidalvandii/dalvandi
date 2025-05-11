import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import About from '@/components/template/aboutme/About/About'
import React from 'react'

export const metadata = {
  title:"My Personal Website | About Me",
  description:"Welcome to my personal website",
}

function page() {
  return (
    <>
    <Navbar/>
    <About/>
    <Footer/>
    </>
  )
}

export default page