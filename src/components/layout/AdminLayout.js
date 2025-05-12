import React from 'react'
import Sidebar from '../modules/Sidebar/Sidebar'
import HeaderAdmin from '../modules/HeaderAdmin/HeaderAdmin'



function AdminLayout({children}) {
  return (
    <section className="block">
        <div className="grid lg:grid-cols-6">
            <div>
                <Sidebar/>
            </div>
            <div className='m-2 lg:col-span-5'>
              <HeaderAdmin/>
                {children}
            </div>
        </div>
    </section>
  )
}

export default AdminLayout