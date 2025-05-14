import React from 'react'

function ContentSetting() {
  return (
    <section>
        <div className="block">
            <h6 className="block font-roboto-light font-bold text-xl ">Content Web Setting</h6>
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
        </div>
    </section>
  )
}

export default ContentSetting