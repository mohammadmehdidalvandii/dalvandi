"use client"
import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ResumeManagement() {
    const [experience , setExperience] = useState(false);
    const [uploadResume , setUploadResume] = useState(false);
    const [editExperience , setEditExperience] = useState(false);


    // Model for Edit Experience
    const handlerShowEditExperience = ()=>{
        setEditExperience(true)
    }
    const handlerExitEditExperience = ()=>{
        setEditExperience(false)
    }
    // Model for experience
    const handlerShowExperience = ()=>{
        setExperience(true);
    }
    const handlerExitExperience = ()=>{
        setExperience(false)
    }
    // Model for upload resume
    const handlerShowUpload = ()=>{
        setUploadResume(true);
    }
    const handlerExitResume = () =>{
        setUploadResume(false)
    }


  return (
    <section className="admin_box">
          <div className="flex justify-center gap-4 flex-col sm:flex-row sm:justify-between  items-center static">
            <h6 className="block font-roboto-black text-xl text-primary">Resume Management</h6>
            <div className="flex gap-4 flex-wrap justify-center *:w-[150px]">
            <button className="btn_success"
            onClick={handlerShowExperience}
            >+ Add Experience</button>
            <button className="btn_success"
            onClick={handlerShowUpload}
            >+ Upload Resume</button>
            </div>
        </div>
        <div className="block 
         p-4 bg-white drop-shadow-md rounded-sm mt-8
         lg:h-[490px] lg:overflow-y-auto
        ">
            <h6 className="block font-roboto-bold text-lg">Work Experience</h6>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-3 mt-4">
                <div className='block p-3 bg-[#e8f0f8] rounded-md'>
                    <p className="block font-roboto-black text-xl mb-2">Senior Front-end Developer</p>
                    <span className="block font-roboto-light text-lg text-text-200">Company name</span>
                    <div className="flex *:font-roboto-light *:text-sm *:text-text-100">
                        <span className="block">Jan 2020 - present</span>
                    </div>
                    <p className="block font-roboto-bold text-md mt-2">Work Experience .....</p>
                    <div className="flex items-center mt-4 gap-3 *:flex *:justify-center *:items-center *:font-roboto-light *:text-md *:text-text-100 *:bg-primary *:w-8 *:h-8  *:rounded-[50%]
                    *:text-white *:duration-300 *:hover:bg-secondary-100 *:cursor-pointer">
                        <button
                        onClick={handlerShowEditExperience}
                        ><FaRegEdit/></button>
                        <button><MdDelete/></button>
                    </div>
                </div>
            </div>
        </div>
        {experience && (
            <div className="box_shadow">
                <div className="box_model">
                         <h6 className="block font-roboto-bold text-primary">Add New Experience</h6>
                <form action="#" className="block mt-4">
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Job Title:</label>
                            <input type="text" className='form_input'/>
                       </div>
                   
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Company:</label>
                            <input type="type" className='form_input'/>
                       </div>
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Start Date</label>
                            <input type="date" className='form_input' />
                       </div>
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>End Date:</label>
                            <input type="date" className='form_input'/>
                       </div>
                        <div className="form_group">
                            <label htmlFor="" className='form_label'>Responsibilities:</label>
                            <textarea type="text" className='form_text'/>
                       </div>
                       <div className="flex gap-4 mt-4 flex-wrap *:cursor-pointer">
                        <button className='btn_cancel'
                        onClick={handlerExitExperience}
                        >Cancel</button>
                        <button className='btn_success w-[150px]'>Add Experience</button>
                       </div>
                </form>
                </div>
            </div>
        )}

        {uploadResume && (
            <div className="box_shadow">
                <div className="box_model">
                              <h6 className="block font-roboto-bold text-primary">Upload Resume</h6>
                <form action="#" className="block mt-4">
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Resume File (PDF)</label>
                            <input type="file" className='form_input'/>
                       </div>
                       <div className="flex gap-4 mt-4 flex-wrap *:cursor-pointer">
                        <button className='btn_cancel'
                        onClick={handlerExitResume}
                        >Cancel</button>
                        <button className='btn_success w-[150px]'>Upload Resume</button>
                       </div>
                </form>
                </div>
            </div>
        )}

        {editExperience && (
               <div className="box_shadow">
                <div className="box_model">
                         <h6 className="block font-roboto-bold text-primary">Edit Work Experience</h6>
                <form action="#" className="block mt-4">
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Job Title:</label>
                            <input type="text" className='form_input'/>
                       </div>
                   
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Company:</label>
                            <input type="type" className='form_input'/>
                       </div>
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Start Date</label>
                            <input type="date" className='form_input' />
                       </div>
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>End Date:</label>
                            <input type="date" className='form_input'/>
                       </div>
                        <div className="form_group">
                            <label htmlFor="" className='form_label'>Responsibilities:</label>
                            <textarea type="text" className='form_text'/>
                       </div>
                       <div className="flex gap-4 mt-4 flex-wrap *:cursor-pointer">
                        <button className='btn_cancel'
                        onClick={handlerExitEditExperience}
                        >Cancel</button>
                        <button className='btn_success w-[150px]'>Add Experience</button>
                       </div>
                </form>
                </div>
            </div>
        )}
    </section>
  )
}

export default ResumeManagement