"use client"
import React, { useState } from 'react'
import SkillCart from '../SkillCart/SkillCart'

function SkillsManagement() {
    const [skills , setSkills] = useState(false);

    const handlerShowSkill = ()=>{
        setSkills(true);
    }

    const handlerExitSkills = ()=>{
        setSkills(false)
    }

  return (
    <section className="admin_box py-6">
          <div className="flex justify-between items-center static">
            <h6 className="block font-roboto-black text-xl text-primary">Skills Management</h6>
            <button className="btn_success cursor-pointer"
            onClick={handlerShowSkill}
            >+ Add Skill</button>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
                <SkillCart/>
                <SkillCart/>
                <SkillCart/>
                <SkillCart/>
                <SkillCart/>
        </div>
        {skills && (
            <div className="bg-black/50 w-full p-4 h-screen fixed z-70 left-0 bottom-0">
                <div className="block bg-white  md:max-w-[600px] mx-auto mt-12 p-4 rounded-md">
                      <h6 className="block font-roboto-bold text-primary">Edit Project</h6>
                <form action="#" className="block mt-4">
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Skill Name:</label>
                            <input type="text" className='form_input'/>
                       </div>
                       <div className="flex gap-4 mt-4 flex-wrap *:cursor-pointer">
                        <button className='btn_secondary rounded-md border-red-400 text-red-500 hover:text-white hover:bg-red-500'
                        onClick={handlerExitSkills}
                        >Cancel</button>
                        <button className='btn_success'>Add Skill</button>
                       </div>
                </form>
                </div>
            </div>
        )}
    </section>
  )
}

export default SkillsManagement