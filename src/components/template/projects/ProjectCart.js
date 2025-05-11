import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProjectCart() {
  return (
    <div className="block bg-white overflow-hidden rounded-md  duration-300 hover:-translate-y-2 hover:drop-shadow-lg">
        <Image src='/assets/images/project.avif' alt='project' width={300} height={200} />
        <div className="block p-4">
            <h6 className="block mt-4 font-roboto-black text-2xl ">E-commerce Website</h6>
            <p className="block mt-4 text-md text-text-200">A modern e-commerce platform built with responsive design and seamless user experience.</p>
            <ul className="flex gap-2 flex-wrap mt-4">
                <li className="flex justify-center items-center bg-primary rounded-lg text-sm py-2  px-3 text-white">node.js</li>
                <li className="flex justify-center items-center bg-primary rounded-lg text-sm py-2  px-3 text-white">node.js</li>
                <li className="flex justify-center items-center bg-primary rounded-lg text-sm py-2  px-3 text-white">node.js</li>
                <li className="flex justify-center items-center bg-primary rounded-lg text-sm py-2  px-3 text-white">node.js</li>
                <li className="flex justify-center items-center bg-primary rounded-lg text-sm py-2  px-3 text-white">node.js</li>
                <li className="flex justify-center items-center bg-primary rounded-lg text-sm py-2  px-3 text-white">node.js</li>
            </ul>
            <Link href='' className='btn_primary rounded-md bg-secondary-100 hover:bg-secondary-200 mt-4'>View Project</Link>
        </div>
    </div>
  )
}

export default ProjectCart