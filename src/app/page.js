import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Feature from '@/components/template/home/Feature/Feature'
import Hero from '@/components/template/home/Hero/Hero'
import connectToDB from '@/config/db'
import { authAdmin } from '@/utils/serverHelper'
import React from 'react'
import ContentModel from '@/models/Content';
import ResumeModel from '@/models/Resume'

async function Home() {
  await connectToDB()
  const user = await authAdmin()

  const content = await ContentModel.find().exec()
  const resumeFile = await ResumeModel.find().exec()
  
  return (
    <>
    <Navbar isAdmin={user?.role}/>
    <Hero title={content[0]?.titleHomePage} description={content[0]?.descriptionHomePage}/>
    <Feature resume={resumeFile[0].resumeFile}/>
    <Footer/>
    </>
  )
}

export default Home