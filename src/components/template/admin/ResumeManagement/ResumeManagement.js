"use client"
import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ResumeManagement({works}) {
    const [experience , setExperience] = useState(false);
    const [uploadResume , setUploadResume] = useState(false);
    const [editExperience , setEditExperience] = useState(false);
    const [job , setJob] = useState('')
    const [company , setCompany] = useState('')
    const [startDate , setStartDate] = useState('')
    const [endDate , setEndDate] = useState('')
    const [responsibilities , setResponsibilities] = useState('')
    const [resumeFile ,  setResumeFile] = useState('');

    // add upload resume file
    const handleUploadResume = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        if(resumeFile){
            formData.append("resumeFile" ,resumeFile);
        }

        if(!resumeFile){
            swal({
                title:"Resume file is Required",
                icon:"error",
                buttons:"Try"
            })
        }

        const res = await fetch('/api/resume',{
            method:"POST",
            body:formData
        })
        if(res.status ===201){
            swal({
                title:"Add Resume success",
                buttons:"Done"
            }).then(()=>{
                setUploadResume(false);
                window.location.reload();
            })
        }


    }

    // Add Experience
    const handlerAddExperience = async (e)=>{
        e.preventDefault()

        const data = {job , company ,startDate ,endDate ,responsibilities}
        if(!job.trim() || !company.trim() || !startDate.trim() || !endDate.trim() || !responsibilities.trim()){
            swal({
                title:"All fields are required.",
                icon:"error",
                buttons:"Try"
            })
        };


        const res = await fetch('/api/work',{
            method:"POST",
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify(data)
        });
        if(res.status === 201){
            swal({
                title:"Experience work Added Successfully",
                icon:"success",
                buttons:"Done"
            }).then(()=>{
                setExperience(false)
                window.location.reload()
            })
        }
    }
    // Removed WORK 
    const handlerDeleteWork = (e, workID)=>{
        e.preventDefault();
        swal({
            title:"Are you sure you want to delete this work?",
            icon:"error",
            buttons:["No","Yes"],
        }).then(async(result)=>{
            if(result){
                const res = await fetch(`/api/work/delete/${workID}`,{
                    method:"DELETE",
                });
                if(res.status === 200 ){
                    swal({
                        title:"Removed success Work",
                        icon:"success",
                        buttons:"Done"
                    }).then(()=>{
                        window.location.reload()
                    })
                }
            }
        })
    }

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
        ">
            <h6 className="block font-roboto-bold text-lg">Work Experience</h6>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-3 mt-4">
                {works.length > 0 ? (
                    works.map((work)=>(
                    <div className='block p-3 bg-[#e8f0f8] rounded-md' key={work._id}> 
                    <p className="block font-roboto-black text-xl mb-2">{work.job}</p>
                    <span className="block font-roboto-light text-lg text-text-200">{work.company}</span>
                    <div className="flex *:font-roboto-light *:text-sm *:text-text-100">
                        <span className="block">Start:{work.startDate} - End Date:{work.endDate}</span>
                    </div>
                    <p className="block font-roboto-bold text-md mt-2">{work.responsibilities}</p>
                    <div className="flex items-center mt-4 gap-3 *:flex *:justify-center *:items-center *:font-roboto-light *:text-md *:text-text-100 *:bg-primary *:w-8 *:h-8  *:rounded-[50%]
                    *:text-white *:duration-300 *:hover:bg-secondary-100 *:cursor-pointer">
                        <button
                        onClick={handlerShowEditExperience}
                        ><FaRegEdit/></button>
                        <button onClick={(e)=>handlerDeleteWork(e, work._id)}><MdDelete/></button>
                    </div>
                </div>
                    ))
                ) :(
                 <span className='block text-center font-roboto-black text-xl text-red-600'>There is no Experience .</span>

                )}
                
            </div>
        </div>
        {experience && (
            <div className="box_shadow">
                <div className="box_model">
                         <h6 className="block font-roboto-bold text-primary">Add New Experience</h6>
                <form action="#" className="block mt-4">
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Job Title:</label>
                            <input type="text" className='form_input'
                            value={job}
                            onChange={(e)=>setJob(e.target.value)}
                            />
                       </div>
                   
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Company:</label>
                            <input type="type" className='form_input'
                            value={company}
                            onChange={(e)=>setCompany(e.target.value)}
                            />
                       </div>
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>Start Date</label>
                            <input type="date" className='form_input' 
                            value={startDate}
                            onChange={(e)=>setStartDate(e.target.value)}
                            />
                       </div>
                    <div className="form_group">
                            <label htmlFor="" className='form_label'>End Date:</label>
                            <input type="date" className='form_input'
                            value={endDate}
                            onChange={(e)=>setEndDate(e.target.value)}
                            />
                       </div>
                        <div className="form_group">
                            <label htmlFor="" className='form_label'>Responsibilities:</label>
                            <textarea type="text" className='form_text'
                                value={responsibilities}
                                onChange={(e)=>setResponsibilities(e.target.value)}
                            />
                       </div>
                       <div className="flex gap-4 mt-4 flex-wrap *:cursor-pointer">
                        <button className='btn_cancel'
                        onClick={handlerExitExperience}
                        >Cancel</button>
                        <button className='btn_success w-[150px]'
                        onClick={handlerAddExperience}
                        >Add Experience</button>
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
                            <input type="file" className='form_input'
                            onChange={(e)=>setResumeFile(e.target.files[0])}
                            />
                       </div>
                       <div className="flex gap-4 mt-4 flex-wrap *:cursor-pointer">
                        <button className='btn_cancel'
                        onClick={handlerExitResume}
                        >Cancel</button>
                        <button className='btn_success w-[150px]'
                            onClick={handleUploadResume}
                        >Upload Resume</button>
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