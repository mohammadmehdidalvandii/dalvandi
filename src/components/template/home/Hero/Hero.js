import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Hero({title , description}) {
  return (
    <section className="block bg-white">
        <div className="container">
            <div className="block text-center mx-auto max-w-[800px] py-16">
                <div className="flex justify-center text-center rounded-[50%] bg-primary p-2 w-[200px] h-[200px] mx-auto duration-300 hover:bg-secondary-100 hover:scale-120">
                    <Image src='/assets/images/user.png' alt='user image' width={200} height={200} className='rounded-[50%]'/>
                </div>
                    <h1 className="block mt-8 font-roboto-black text-3xl md:text-5xl text-primary">{title}</h1>
                    <p className="block mt-4 font-roboto-bold sm:text-md  md:text-base text-text-200">{description}</p>
                    <div className="flex justify-center items-center mt-8 gap-4">
                        <Link href='/AboutMe' className='btn_primary'>About Me</Link>
                        <Link href='/Projects' className='btn_secondary'>Projects</Link>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Hero