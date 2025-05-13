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
            <div className="box_shadow">
                <div className="box_model">
                      <h6 className="block font-roboto-bold text-primary">Edit Project</h6>
                <form action="#" className="block mt-4">
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Skill Name:</label>
                            <input type="text" className='form_input'/>
                       </div>
                       <div className="flex gap-4 mt-4 flex-wrap *:cursor-pointer">
                        <button className='btn_cancel'
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