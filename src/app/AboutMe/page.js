import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import About from '@/components/template/aboutme/About/About'
import React from 'react'
import { authAdmin } from '@/utils/serverHelper'
import connectToDB from '@/config/db'
import ContentModel from '@/models/Content'
import WorkModel from '@/models/Work'
import SkillModel from '@/models/Skills'

export const metadata = {
  title:"My Personal Website | About Me",
  description:"Welcome to my personal website",
}

async function page() {
  await connectToDB()
    const user = await authAdmin()

    const content =  await ContentModel.find({}).exec();
    const works = await WorkModel.find({}).exec();
    const skills = await SkillModel.find({}).exec();
    
  return (
    <>
    <Navbar isAdmin={user?.role}/>
    <About about={content[0]?.bioAboutPage} works={JSON.parse(JSON.stringify(works))} skills={JSON.parse(JSON.stringify(skills))}/>
    <Footer/>
    </>
  )
}

export default page