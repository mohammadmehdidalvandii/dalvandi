import Image from 'next/image'
import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function ProjectManageCart() {
  return (
    <div className=' block bg-white drop-shadow-md rounded-sm overflow-hidden duration-300 hover:-translate-y-2 relative  select-none'>
        <Image src='/assets/images/project.avif' alt='project image' width={200} height={200} className='w-full'/>
        <div className="flex items-center gap-2 absolute top-2 right-2 w-[90px]
            *:flex *:justify-center *:items-center *w-10 *:h-10 *:px-2 *:rounded-[50%] *:bg-primary *:text-white *:text-lg
            *:duration-300  *:hover:bg-secondary-200 *:cursor-pointer 
                    ">
            <button>
                <FaRegEdit/>
            </button>
            <button>
                <MdDelete/>
            </button>
        </div>
        <div className="block p-4">
             <h6 className="block mt-4 font-roboto-black text-2xl ">E-commerce Website</h6>
            <p className="block mt-4 text-md text-text-200">A modern e-commerce platform built with responsive design and seamless user experience.</p>
            <div className="flex justify-between mt-4">
                <span className="block text-text-100 text-md">Added: Jan 15, 2024</span>
                <span className="block text-text-100 text-md">Views: 1,234</span>
            </div>
            <ul className="flex gap-2 flex-wrap mt-4">
                <li className="flex justify-center items-center bg-primary rounded-lg text-sm py-2  px-3 text-white">node.js</li>
                <li className="flex justify-center items-center bg-primary rounded-lg text-sm py-2  px-3 text-white">node.js</li>
            </ul>
        </div>
    </div>
  )
}

export default ProjectManageCart