import Link from 'next/link';
import React from 'react';
import { FiMail } from "react-icons/fi";
import { MdOutlinePhoneAndroid } from "react-icons/md";



function Contact() {
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
                            <input type="text" className='form_input'/>
                        </div>
                        <div className="form_group">
                            <label htmlFor="" className='form_label'>Email:</label>
                            <input type="text" className='form_input' />
                        </div>
                        <div className="form_group">
                            <label htmlFor="" className='form_label'>Subject:</label>
                            <input type="text" className='form_input' />
                        </div>
                        <div className="form_group">
                            <label htmlFor="" className='form_label'>Message:</label>
                            <textarea rows={7} className='form_text' type="text" />
                        </div>
                        <button className="btn_success">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact