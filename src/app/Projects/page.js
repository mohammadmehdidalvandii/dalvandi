import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import React from 'react'

export const metadata = {
  title:"My Personal Website | Projects",
  description:"Welcome to my personal website",
}

function page() {
  return (
    <>
    <Navbar/>
    <Footer/>
    </>
  )
}

export default page