"use client"
import React, { useState } from 'react'

function ContentSetting() {
    const [editContent , setEditContent] = useState(false);

    const handlerShowEditContent = ()=>{
        setEditContent(!editContent)
    }
  return (
    <section>
        <div className="block">
            <div className="flex justify-between items-center">
                <h6 className="block font-roboto-light font-bold text-xl ">Content Web Setting</h6>
                <button className="btn_success cursor-pointer"
                onClick={handlerShowEditContent}
                >
                    {!editContent ? "Edit Content" :"Back"}
                </button>
            </div>
            {!editContent ? ( 
                 <form action="" className="block mt-6">
                <div className="form_group">
                    <label htmlFor="" className="form_label">Title Home Page :</label>
                    <input type="text" className="form_input" />
                </div>
                <div className="form_group">
                    <label htmlFor="" className="form_label">Description Home Page:</label>
                    <input type="text" className="form_input" />
                </div>
                <div className="form_group">
                    <label htmlFor="" className="form_label">Bio me About Page :</label>
                    <input type="text" className="form_input" />
                </div>
                <div className="form_group">
                    <label htmlFor="" className="form_label">Github Link :</label>
                    <input type="text" className="form_input" />
                </div>
                <div className="form_group">
                    <label htmlFor="" className="form_label">Linkedin Link :</label>
                    <input type="text" className="form_input" />
                </div>
                <div className="form_group">
                    <label htmlFor="" className="form_label">Telegram Link :</label>
                    <input type="text" className="form_input" />
                </div>
                <button className="btn_success cursor-pointer">Save Content</button>
            </form>
            ) : (
                <>
                   <h6 className="block font-roboto-bold  text-xl mt-4 text-primary">Edit Project</h6>
                 <form action="" className="block mt-6">
                <div className="form_group">
                    <label htmlFor="" className="form_label">Title Home Page :</label>
                    <input type="text" className="form_input" />
                </div>
                <div className="form_group">
                    <label htmlFor="" className="form_label">Description Home Page:</label>
                    <input type="text" className="form_input" />
                </div>
                <div className="form_group">
                    <label htmlFor="" className="form_label">Bio me About Page :</label>
                    <input type="text" className="form_input" />
                </div>
                <div className="form_group">
                    <label htmlFor="" className="form_label">Github Link :</label>
                    <input type="text" className="form_input" />
                </div>
                <div className="form_group">
                    <label htmlFor="" className="form_label">Linkedin Link :</label>
                    <input type="text" className="form_input" />
                </div>
                <div className="form_group">
                    <label htmlFor="" className="form_label">Telegram Link :</label>
                    <input type="text" className="form_input" />
                </div>
                <button className="btn_success cursor-pointer">Save Content</button>
            </form>
                </>
            )}
           
        </div>
    </section>
  )
}

export default ContentSetting