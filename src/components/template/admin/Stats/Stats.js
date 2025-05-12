import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaDiagramProject , FaMessage  , FaDownload  } from "react-icons/fa6";


function Stats() {
  return (
    <section className="admin_box py-6">
        <div className="grid gap-4 sm:grid-cols-2 md:gird-cols-3  lg:grid-cols-4
        *:block *:p-4 *:bg-white *:drop-shadow-md *:rounded-sm *:border-b-3 *:border-secondary-200
        *:duration-300 *:hover:-translate-y-2
        ">
            <div>
                <div className="flex gap-4 items-center">
                    <span className='flex justify-center items-center w-12 h-12 bg-primary text-white text-2xl rounded-md'>
                        <FaRegEye/>
                    </span>
                    <div className="block">
                        <span className='block font-roboto-bold text-xl text-text-200'>Page Views</span>
                        <span className='block font-roboto-bold text-lg text-primary mt-2'>1.234</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex gap-4 items-center">
                    <span className='flex justify-center items-center w-12 h-12 bg-primary text-white text-2xl rounded-md'><FaDiagramProject/></span>
                    <div className="block">
                        <span className='block font-roboto-bold text-xl text-text-200'>Projects</span>
                        <span className='block font-roboto-bold text-lg text-primary mt-2'>12</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex gap-4 items-center">
                    <span className='flex justify-center items-center w-12 h-12 bg-primary text-white text-2xl rounded-md'><FaMessage /></span>
                    <div className="block">
                        <span className='block font-roboto-bold text-xl text-text-200'>New Messages</span>
                        <span className='block font-roboto-bold text-lg text-primary mt-2'>3</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex gap-4 items-center">
                    <span className='flex justify-center items-center w-12 h-12 bg-primary text-white text-2xl rounded-md'><FaDownload/></span>
                    <div className="block">
                        <span className='block font-roboto-bold text-xl text-text-200'>Resume Downloads</span>
                        <span className='block font-roboto-bold text-lg text-primary mt-2'>45</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stats