import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Feature from '@/components/template/home/Feature/Feature'
import Hero from '@/components/template/home/Hero/Hero'
import { authAdmin } from '@/utils/serverHelper'
import React from 'react'

async function Home() {
  const user = await authAdmin()
  return (
    <>
    <Navbar isAdmin={user?.role}/>
    <Hero/>
    <Feature/>
    <Footer/>
    </>
  )
}

export default Home