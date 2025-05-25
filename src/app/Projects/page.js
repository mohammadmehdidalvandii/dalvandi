import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Projects from '@/components/template/projects/Projects'
import React from 'react'
import { authAdmin } from '@/utils/serverHelper'
import connectToDB from '@/config/db'
import ProjectsModel from '@/models/Projects'

export const metadata = {
  title:"My Personal Website | Projects",
  description:"Welcome to my personal website",
}

async function page() {
  await connectToDB()

  const user = await authAdmin();
  const projects =  await ProjectsModel.find({}).exec()

  return (
    <>
    <Navbar isAdmin={user?.role}/>
    <Projects projects={JSON.parse(JSON.stringify(projects))}/>
    <Footer/>
    </>
  )
}

export default page