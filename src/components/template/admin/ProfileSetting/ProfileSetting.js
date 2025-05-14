import React from 'react'

function ProfileSetting() {
  return (
    <section>
        <div className="block">
            <h6 className="block font-roboto-light font-bold text-xl ">Profile Setting</h6>
            <form action="#" className="block mt-4">
                <div className="form_group">
                  <label htmlFor="" className='form_label'>Full Name :</label>
                  <input type="text" className="form_input"/>
                </div>
                <div className="form_group">
                  <label htmlFor="" className='form_label'>Email :</label>
                  <input type="text" className="form_input"/>
                </div>
                <div className="form_group">
                  <label htmlFor="" className='form_label'>Profile Picture :</label>
                  <input type="file" className="form_input"/>
                </div>
                <button className="btn_success cursor-pointer">Save Profile</button>
            </form>
        </div>
    </section>
  )
}

export default ProfileSetting