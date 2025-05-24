"use client"
import React from 'react'
import { MdDelete } from "react-icons/md";

function SkillCart({name , id}) {

  const handlerDeleteSkill = (e , id)=>{
    e.preventDefault();
  
    swal({
      title:"Are you sure you want to delete this skill?",
      icon:"error",
      buttons:["No","Yes"]
    }).then(async(result)=>{
      if(result){
        const res = await fetch(`/api/skills/delete/${id}`,{
          method:"DELETE",
        })
        if(res.status === 200){
          swal({
            title:"Removed Skill successfully",
            icon:"success",
            button:"Done"
          }).then(()=>{
            window.location.reload()
          })
        }
      }
    })


  }

  return (
    <div className='flex justify-between p-4 bg-white drop-shadow-lg rounded-sm border-l-3 border-secondary-200
        duration-300 hover:-translate-y-2'
        >
            <span className="block font-robot-bold text-lg font-black text-primary">{name}</span>
            <div className="flex items-center gap-4 *:flex *:justify-center *:items-center *:rounded-[50%] *:text-white *:cursor-pointer *:w-8 *:h-8 *:bg-primary
            *:duration-300 *:hover:bg-secondary-100
            ">
                <button onClick={(e)=>handlerDeleteSkill(e ,id)}><MdDelete/></button>
            </div>
        </div>
  )
}

export default SkillCart