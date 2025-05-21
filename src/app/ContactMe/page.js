import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Contact from '@/components/template/contactMe/Contact'
import React from 'react'
import { authAdmin } from '@/utils/serverHelper'

export const metadata = {
  title:"My Personal Website | Contact Me",
  description:"Welcome to my personal website",
}

async function page() {

  const user = await authAdmin()

  return (
    <>
    <Navbar isAdmin={user?.role}/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default page