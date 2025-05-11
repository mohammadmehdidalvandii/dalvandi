import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Projects from '@/components/template/projects/Projects'
import React from 'react'

export const metadata = {
  title:"My Personal Website | Projects",
  description:"Welcome to my personal website",
}

function page() {
  return (
    <>
    <Navbar/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default page