"use client"
import React, { useState } from 'react'
import swal from 'sweetalert';
import {validationPassword , validationEmail} from '@/src/utils/validation'
import { redirect } from 'next/navigation';

function Signin() {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const data = {password , email}



    const HandlerLogin = async (e)=>{
        e.preventDefault();
           if(!email.trim() || !password.trim()){
        swal({
            title:"Field values ​​are required.",
            icon:"error",
            buttons:"Try"
        })
      }
          const isValidEmail = validationEmail(email);
    if(!isValidEmail){
        swal({
            title:"Password or Email is not valid",
            icon:"error",
            buttons:'Try'
        })
        setEmail('')
        setPassword('')
    }
    const isValidPassword = validationPassword(password);
    if(!isValidPassword){
        swal({
            title:"Password or Email is not valid",
            icon:"error",
            buttons:'Try'
        })
        setEmail("")
        setPassword('')
    }

        const res = await fetch('api/auth/signin',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data),
        });
        if(res.status === 200){
            swal({
                title:"Login is successfully",
                icon:"success",
                buttons:"Go To Dashboard"
            }).then(()=>{
                return redirect('/Admin')
            })
        }
        if(res.status === 419 || res.status === 422){
            swal({
                title:"Email or Password is not correct",
                icon:"error",
                buttons:"Try"
            })
        }
    }

  return (
        <div className="box_model">
                      <h6 className="block text-center font-roboto-black text-2xl text-primary">Admin Enter Email and Password</h6>
    <form action="#" className="block mt-8">
        <div className="form_group">
            <label htmlFor="" className="form_label">Email:</label>
            <input type="text" className="form_input" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>
        <div className="form_group">
            <label htmlFor="" className="form_label">Password:</label>
            <input type="password" className="form_input" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
        <button className="btn_success cursor-pointer w-full" onClick={HandlerLogin}>login</button>
    </form>
        </div>
  )
}

export default Signin