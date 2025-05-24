"use client"
import React, { useState } from 'react'
import SkillCart from '../SkillCart/SkillCart'

function SkillsManagement({items}) {
    const [skills , setSkills] = useState(false);
    const [name , setName] = useState('');

    const handlerShowSkill = ()=>{
        setSkills(true);
    }

    const handlerExitSkills = ()=>{
        setSkills(false)
    }

    const handlerAddSkills = async (e)=>{
        e.preventDefault();

        const data = {name}

        if(name === ''){
            swal({
                title:"Skill is required",
                icon:"error",
                button:"Try"
            });
        }

        const res = await fetch('/api/skills',{
            method:"POST",
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify(data)
        });

        if(res.status === 201){
            swal({
                title:"new skill is added",
                icon:"success",
                button:"Done"
            }).then(()=>{
                setSkills(false);
                window.location.reload()
            })
        }

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
            {items.length > 0  ?(
                items.map((item)=>(
                    <SkillCart name={item.name} id={item._id} key={item._id}/>
                ))
            ) :(
                <span className='block text-center font-roboto-black text-xl text-red-600'>There is no Skills.</span>
            )}
              
        </div>
        {skills && (
            <div className="box_shadow">
                <div className="box_model">
                      <h6 className="block font-roboto-bold text-primary">Edit Project</h6>
                <form action="#" className="block mt-4">
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Skill Name:(capital letters)</label>
                            <input type="text" className='form_input' 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            />
                       </div>
                       <div className="flex gap-4 mt-4 flex-wrap *:cursor-pointer">
                        <button className='btn_cancel'
                        onClick={handlerExitSkills}
                        >Cancel</button>
                        <button className='btn_success' onClick={handlerAddSkills}>Add Skill</button>
                       </div>
                </form>
                </div>
            </div>
        )}
    </section>
  )
}

export default SkillsManagement