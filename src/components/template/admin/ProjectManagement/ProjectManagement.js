"use client"
import React, { useState } from 'react'
import ProjectManageCart from '../ProjectManageCart/ProjectManageCart'

function ProjectManagement() {
  const [projectModel , setProjectModel] = useState(false);

  const handlerShowModel = ()=>{
    setProjectModel(true)
  }
  const handlerExitModel = ()=>{
    setProjectModel(false)
  }

  return (
    <section className="admin_box py-6 ">
        <div className="flex justify-between items-center static">
            <h6 className="block font-roboto-black text-xl text-primary">Project Management</h6>
            <button className="btn_success"
            onClick={handlerShowModel}
            >+ AddProject</button>
        </div>
        <div className="block lg:h-[490px] lg:overflow-y-auto mt-8">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            <ProjectManageCart/>
            <ProjectManageCart/>
            <ProjectManageCart/>
            <ProjectManageCart/>
        </div>
        </div>
        {projectModel && (
          <div className="bg-black/50 w-full p-4 h-screen fixed z-70 left-0 bottom-0">
              <div className="block bg-white  md:max-w-[600px] mx-auto mt-12 p-4 rounded-md">
                <h6 className="block font-roboto-bold text-primary">Add New Project</h6>
                <form action="#" className="block mt-4">
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Project Name:</label>
                            <input type="text" className='form_input'/>
                       </div>
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Description:</label>
                            <textarea type="text" className='form_text'/>
                       </div>
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Image Project:</label>
                            <input type="file" className='form_input'/>
                       </div>
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Tags (comma-separated)</label>
                            <input type="text" className='form_input' placeholder='HTML,CSS,javascript'/>
                       </div>
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Project URL:</label>
                            <input type="text" className='form_input' placeholder='https://...'/>
                       </div>
                       <div className="flex gap-4 mt-4 flex-wrap *:cursor-pointer">
                        <button className='btn_secondary rounded-md border-red-400 text-red-500 hover:text-white hover:bg-red-500'
                        onClick={handlerExitModel}
                        >Cancel</button>
                        <button className='btn_success'>Add Project</button>
                       </div>
                </form>
              </div>
          </div>
        )}
    </section>
  )
}

export default ProjectManagement