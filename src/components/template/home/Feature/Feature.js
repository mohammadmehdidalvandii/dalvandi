import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Feature() {
  return (
    <section className="block">
        <div className="container my-16">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  *:bg-white  *:overflow-hidden *:rounded-md *:duration-300 *:hover:-translate-y-1 *:hover:drop-shadow-xl *:hover:drop-shadow-shadows">
                <div>
                    <Image src='/assets/images/skills.jpg' alt='' width={200} height={200} className='w-full h-[370px]'/>
                    <div className="block text-center my-8">
                        <h3 className="block mb-6 font-roboto-black text-2xl text-primary">My Skills</h3>
                        <p className='block mb-6 text-text-100 text-md'>Discover my professional skills and expertise</p>
                        <Link href='/AboutMe'className='block font-roboto-bold text-lg text-secondary-100 duration-300 hover:text-secondary-200 hover:underline' >View Skills</Link>
                    </div>
                </div>
                <div>
                    <Image src='/assets/images/project.avif' alt='' width={200} height={200} className='w-full h-[370px]'/>
                    <div className="block text-center my-8">
                        <h3 className="block mb-6 font-roboto-black text-2xl text-primary">Projects</h3>
                        <p className='block mb-6 text-text-100 text-md'>View my latest work and achievements</p>
                        <Link href='/Projects'className='block font-roboto-bold text-lg text-secondary-100 duration-300 hover:text-secondary-200 hover:underline' >View Projects</Link>
                    </div>
                </div>
                <div>
                    <Image src='/assets/images/resume2.jpg' alt='' width={200} height={200} className='w-full h-[370px]'/>
                    <div className="block text-center my-8">
                        <h3 className="block mb-6 font-roboto-black text-2xl text-primary">Resume</h3>
                        <p className='block mb-6 text-text-100 text-md'>Download my complete resume</p>
                        <Link href='/' className='block font-roboto-bold text-lg text-secondary-100 duration-300 hover:text-secondary-200 hover:underline' target='_blank' download>Download CV</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default Feature