"use client"
import Link from 'next/link';
import React  from 'react';
import { MdDelete } from 'react-icons/md';

function Message({messages}) {

    const handlerDeleteMessage = (e,messageID)=>{
        e.preventDefault();
        swal({
            title:"Are you sure you want to delete this Message?",
            icon:"error",
            buttons:["No","Yes"]
        }).then(async (result)=>{
            if(result){
                const res = await fetch(`/api/contact/delete/${messageID}`,{
                    method:"DELETE",
                })
                if(res.status === 200){
                    swal({
                        title:"Message Deleted Successfully",
                        icon:"success",
                        buttons:"Done"
                    }).then(()=>{
                        window.location.reload();
                    })
                }
            }
        })
    }

  return (
    <section className="admin_box py-6">
          <div className="block static">
            <h6 className="block font-roboto-black text-xl text-primary">Messages Management</h6>
        </div>
        <div className="grid gap-4 mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2    
         *:block *:p-4 *:bg-white *:drop-shadow-md *:rounded-sm *:border-l-3 *:border-secondary-200
        *:duration-300 *:hover:bg-[#e8f0f8]
        ">
            {messages.length > 0 ? (
                    messages.map((message)=>(

            <div key={message._id}>
                <h6 className="block font-roboto-black text-lg text-primary">name : {message.name}</h6>
                <span className="block mt-4 ">subject : {message.subject}</span>
                <p className="block font-roboto-light text-sm text-text-100 mt-4">message : {message.message}</p>
                <Link href={`mailto:${message.email}`} type='email' target='_blank' className='block font-roboto-light text-md text-text-200 duration-300 hover:text-secondary-200 mt-4'>email : {message.email}</Link>
                <button className="btn_cancel w-8 h-8 rounded-[50%] mt-4 cursor-pointer"
                onClick={(e)=>handlerDeleteMessage(e, message._id)}
                ><MdDelete/></button>
            </div>
                    ))
            ) :(
                                <span className='block text-center font-roboto-black text-xl text-red-600'>There is no Skills.</span>

            )}
        </div>
    </section>
  )
}

export default Message