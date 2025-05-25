"use client"
import React, { useState } from 'react'

function ContentSetting() {
    const [titleHomePage , setTitleHomePage] = useState('');
    const [descriptionHomePage , setDescriptionHomePage] = useState('');
    const [bioAboutPage , setBioAboutPage] = useState('');
    const [githubLink , setGithubLink] = useState('');
    const [linkedinLink , setLinkedinLink] = useState('');
    const [telegramLink , setTelegramLink] = useState('');

    // Add content
    const handlerAddContent = async (e)=>{
        e.preventDefault();
        if(!titleHomePage.trim()|| !descriptionHomePage.trim() || !bioAboutPage.trim() || !githubLink.trim() || !linkedinLink.trim() || !linkedinLink.trim() || !telegramLink.trim() ){
            swal({
                title:"All fields is required",
                icon:"error",
                buttons:"Try"
            })
        };

        const data = {
            titleHomePage,
            descriptionHomePage,
            bioAboutPage,
            githubLink,
            linkedinLink,
            telegramLink,
        }

        const res = await fetch('/api/content',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        });
        if(res.status === 201){
            swal({
                title:"Add content for web",
                icon:"success",
                buttons:"Done",
            }).then(()=>{
                window.location.reload()
            })
        }

    }

  return (
    <section>
        <div className="block"> 
            <div className="flex justify-between items-center">
                <h6 className="block font-roboto-light font-bold text-xl ">Content Web Setting</h6>
            </div>
                             <form action="" className="block mt-6">
                <div className="form_group">
                    <label htmlFor="" className="form_label">Title Home Page :</label>
                    <input type="text" className="form_input"
                    value={titleHomePage}
                    onChange={(e)=>setTitleHomePage(e.target.value)}
                    />
                </div>
                <div className="form_group">
                    <label htmlFor="" className="form_label">Description Home Page:</label>
                    <input type="text" className="form_input" 
                    value={descriptionHomePage}
                    onChange={(e)=>setDescriptionHomePage(e.target.value)}
                    />
                </div>
                <div className="form_group">
                    <label htmlFor="" className="form_label">Bio me About Page :</label>
                    <input type="text" className="form_input" 
                    value={bioAboutPage}
                    onChange={(e)=>setBioAboutPage(e.target.value)}
                    />
                </div>
                <div className="form_group">
                    <label htmlFor="" className="form_label">Github Link :</label>
                    <input type="text" className="form_input" 
                    value={githubLink}
                    onChange={(e)=>setGithubLink(e.target.value)}
                    />
                </div>
                <div className="form_group">
                    <label htmlFor="" className="form_label">Linkedin Link :</label>
                    <input type="text" className="form_input" 
                    value={linkedinLink}
                    onChange={(e)=>setLinkedinLink(e.target.value)}
                    />
                </div>
                <div className="form_group">
                    <label htmlFor="" className="form_label">Telegram Link :</label>
                    <input type="text" className="form_input"  
                    value={telegramLink}
                    onChange={(e)=>setTelegramLink(e.target.value)}
                    />
                </div>
                <button className="btn_success cursor-pointer"
                onClick={handlerAddContent}
                >Save Content</button>
            </form>
           
        </div>
    </section>
  )
}

export default ContentSetting