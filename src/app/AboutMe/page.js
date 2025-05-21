import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import About from '@/components/template/aboutme/About/About'
import React from 'react'
import { authAdmin } from '@/utils/serverHelper'

export const metadata = {
  title:"My Personal Website | About Me",
  description:"Welcome to my personal website",
}

async function page() {

    const user = await authAdmin()
  

  return (
    <>
    <Navbar isAdmin={user?.role}/>
    <About/>
    <Footer/>
    </>
  )
}

export default page