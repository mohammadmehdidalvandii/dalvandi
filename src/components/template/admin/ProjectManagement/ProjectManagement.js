import Link from 'next/link'
import React from 'react'
import ProjectManageCart from '../ProjectManageCart/ProjectManageCart'

function ProjectManagement() {
  return (
    <section className="admin_box py-6 ">
        <div className="flex justify-between items-center static">
            <h6 className="block font-roboto-black text-xl text-primary">Project Management</h6>
            <button className="btn_success">+ AddProject</button>
        </div>
        <div className="block lg:h-[500px] lg:overflow-y-auto mt-8">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            <ProjectManageCart/>
            <ProjectManageCart/>
            <ProjectManageCart/>
            <ProjectManageCart/>
        </div>
        </div>
    </section>
  )
}

export default ProjectManagement