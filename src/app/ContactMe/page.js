import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Contact from '@/components/template/contactMe/Contact'
import React from 'react'

export const metadata = {
  title:"My Personal Website | Contact Me",
  description:"Welcome to my personal website",
}

function page() {
  return (
    <>
    <Navbar/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default page