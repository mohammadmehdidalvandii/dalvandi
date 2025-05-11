import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <section className="block bg-white py-12 text-primary">
        <div className="container">
            <div className="block mx-auto mb-6">
                <h5 className="title">About Me</h5>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-3">
                <div>
                    <Image src='/assets/images/me.avif' alt='user' width={200} height={200} className='w-[350px] rounded-md duration-300 hover:border-3 hover:border-primary hover:scale-110'/>
                </div>
                <div className='col-span-2'>
                    <div className="block">
                        <h5 className="block font-roboto-bold text-2xl text-primary">Who I am</h5>
                        <p className="block text-text-100 font-roboto-light text-md leading-6 py-4">I am a passionate professional with expertise in various fields. My journey in the industry has equipped me with valuable skills and experiences that I bring to every project.</p>
                    </div>
                    <div className="block">
                        <h5 className="block font-roboto-bold text-2xl text-primary ">My Experience</h5>
                        <ul className='list-disc block my-4 *:block *:mb-2 *:font-roboto-bold *:text-md *:text-text-100'>
                            <li>Collaborated with diverse teams</li>
                            <li>Collaborated with diverse teams</li>
                            <li>Collaborated with diverse teams</li>
                            <li>Collaborated with diverse teams</li>
                        </ul>
                    </div>
                    <div className="block">
                        <h5 className="block font-roboto-bold text-2xl text-primary ">Skills</h5>
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
                            <div className='block md:w-[220px] font-roboto-bold text-lg text-center py-3 bg-white border-l-3 rounded-sm border-primary drop-shadow-lg duration-300 hover:bg-primary hover:text-white hover:-translate-y-2'>items</div>
                            <div className='block md:w-[220px] font-roboto-bold text-lg text-center py-3 bg-white border-l-3 rounded-sm border-primary drop-shadow-lg duration-300 hover:bg-primary hover:text-white hover:-translate-y-2'>items</div>
                            <div className='block md:w-[220px] font-roboto-bold text-lg text-center py-3 bg-white border-l-3 rounded-sm border-primary drop-shadow-lg duration-300 hover:bg-primary hover:text-white hover:-translate-y-2'>items</div>
                            <div className='block md:w-[220px] font-roboto-bold text-lg text-center py-3 bg-white border-l-3 rounded-sm border-primary drop-shadow-lg duration-300 hover:bg-primary hover:text-white hover:-translate-y-2'>items</div>
                            <div className='block md:w-[220px] font-roboto-bold text-lg text-center py-3 bg-white border-l-3 rounded-sm border-primary drop-shadow-lg duration-300 hover:bg-primary hover:text-white hover:-translate-y-2'>items</div>
                            <div className='block md:w-[220px] font-roboto-bold text-lg text-center py-3 bg-white border-l-3 rounded-sm border-primary drop-shadow-lg duration-300 hover:bg-primary hover:text-white hover:-translate-y-2'>items</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About