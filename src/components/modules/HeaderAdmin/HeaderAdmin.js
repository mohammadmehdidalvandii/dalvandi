"use client"
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'
import swal from 'sweetalert';

function HeaderAdmin() {

  const handlerExit = (e)=>{
    e.preventDefault();
    swal({
      title:"Are you sure you want to go?",
      icon:"warning",
      buttons:["No","Yes"]
    }).then(async (result)=>{
      if(result){
           const res = await fetch('api/auth/signout',{
      method:"POST"
    });
    if(res.status === 200){
      swal({
        title:"Logout is successfully",
        icon:"success",
        buttons:'Done'
      }).then(()=>{
        return redirect('/')
      })
    }
      }
    })
 
  }

  return (
    <section className="bg-white p-3 text-primary rounded-md mb-6">
        <div className="flex justify-center gap-4 sm:justify-between items-center flex-wrap">
            <h5 className="block font-roboto-black text-2xl font-black">Welcome Back Admin</h5>
            <div className="flex items-center gap-4">
                <Link href='/' className='btn_primary'>Go Home</Link>
                <button className='btn_primary bg-red-400 hover:bg-red-600 cursor-pointer' onClick={handlerExit}>Exit</button>
            </div>
        </div>
    </section>
  )
}

export default HeaderAdmin