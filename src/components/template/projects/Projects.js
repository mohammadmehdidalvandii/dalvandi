import React from 'react'
import ProjectCart from './ProjectCart'

function Projects() {
  return (
    <section className="block my-12">
        <div className="container">
            <div className="block">
                <h2 className="title">My Projects</h2>
                <div className="grid gap-6 mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <ProjectCart/>
                    <ProjectCart/>
                    <ProjectCart/>
                    <ProjectCart/>
                </div>
            </div>
            <ul className="flex justify-center items-center gap-2 mt-8">
                <li className="flex justify-center items-center w-10 h-10 rounded-[50%] bg-primary text-white text-xl cursor-pointer">
                    1
                </li>
                <li className="flex justify-center items-center w-10 h-10 rounded-[50%] bg-primary text-white text-xl cursor-pointer">
                    2
                </li>
                <li className="flex justify-center items-center w-10 h-10 rounded-[50%] bg-primary text-white text-xl cursor-pointer">
                    3
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Projects