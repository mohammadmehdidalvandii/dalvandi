"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMail } from "react-icons/fi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import swal from 'sweetalert';


function Contact() {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [subject , setSubject] = useState('')
    const [message , setMessage] = useState('')


    const handlerSendMessage = async (e)=>{
        e.preventDefault()
        if(!name.trim() || !email.trim() || !subject.trim() || !message.trim()){
            swal({
                title:"All felids is required",
                icon:"success",
                buttons:"Try"
            });
        };

        const data ={name , email ,subject ,message}

        const res = await fetch('/api/contact',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        });
        if(res.status === 201){
            swal({
                title:"Message Send for admin",
                icon:"success",
                buttons:'Done'
            }).then(()=>{
                window.location.reload()
            })
        }
    }

  return (
    <section className="block my-12">
        <div className="container">
            <div className="flex justify-center items-center">
                <h3 className="title">Contact Me</h3>
            </div>
            <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 bg-white rounded-md overflow-hidden *:p-4">
                <div className='block bg-primary '>
                    <div className="block text-white">
                        <h6 className="title text-white text-2xl">Get in Touch</h6>
                        <p className="block my-4 font-roboto-bold text-md">Feel free to reach out to me using the contact form or through the following channels:</p>
                    </div>
                    <ul className="block mt-4 *:flex *:flex-wrap *:gap-2 *:items-center *:mb-3 text-white">
                        <li>
                            <span className="text-3xl"><FiMail/></span>
                            <Link href='https://mhmdmehdidalvandi@gmail.com' target='_blank' className=''>mhmdmehdidalvandi@gmail.com</Link>
                        </li>
                        <li>
                            <span className="text-3xl"><MdOutlinePhoneAndroid/></span>
                            <Link href='tel:+98390944025'>09390944025</Link>
                        </li>
                    </ul>
                </div>
                <div className='block bg-white'>
                    <form action="" className="block">
                        <div className="form_group">
                            <label htmlFor="" className='form_label'>Name:</label>
                            <input type="text" className='form_input'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="" className='form_label'>Email:</label>
                            <input type="text" className='form_input' 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="" className='form_label'>Subject:</label>
                            <input type="text" className='form_input' 
                            value={subject}
                            onChange={(e)=>setSubject(e.target.value)}
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="" className='form_label'>Message:</label>
                            <textarea rows={7} className='form_text' type="text" 
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                            />
                        </div>
                        <button className="btn_success cursor-pointer" onClick={handlerSendMessage}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact