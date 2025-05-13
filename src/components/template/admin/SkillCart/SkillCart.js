import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function SkillCart() {
  return (
    <div className='flex justify-between p-4 bg-white drop-shadow-lg rounded-sm border-l-3 border-secondary-200
        duration-300 hover:-translate-y-2'
        >
            <span className="block font-robot-bold text-lg font-black text-primary">Javascript</span>
            <div className="flex items-center gap-4 *:flex *:justify-center *:items-center *:rounded-[50%] *:text-white *:cursor-pointer *:w-8 *:h-8 *:bg-primary
            *:duration-300 *:hover:bg-secondary-100
            ">
                <button><MdDelete/></button>
            </div>
        </div>
  )
}

export default SkillCart