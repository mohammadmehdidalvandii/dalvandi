import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Projects from '@/components/template/projects/Projects'
import React from 'react'
import { authAdmin } from '@/utils/serverHelper'

export const metadata = {
  title:"My Personal Website | Projects",
  description:"Welcome to my personal website",
}

async function page() {

  const user = await authAdmin()

  return (
    <>
    <Navbar isAdmin={user?.role}/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default page