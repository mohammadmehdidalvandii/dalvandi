import React from 'react'

function Signin() {
  return (
        <div className="box_model">
                      <h6 className="block text-center font-roboto-black text-2xl text-primary">Admin Enter Email and Password</h6>
    <form action="#" className="block mt-8">
        <div className="form_group">
            <label htmlFor="" className="form_label">Email:</label>
            <input type="text" className="form_input" />
        </div>
        <div className="form_group">
            <label htmlFor="" className="form_label">Password:</label>
            <input type="text" className="form_input" />
        </div>
        <button className="btn_success cursor-pointer w-full">login</button>
    </form>
        </div>
  )
}

export default Signin