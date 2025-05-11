import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Feature from '@/components/template/home/Feature/Feature'
import Hero from '@/components/template/home/Hero/Hero'
import React from 'react'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Feature/>
    <Footer/>
    </>
  )
}

export default Home