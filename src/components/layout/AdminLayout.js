import React from 'react'
import Sidebar from '../modules/Sidebar/Sidebar'



function AdminLayout({children}) {
  return (
    <section className="block">
        <div className="grid gap-2 lg:grid-cols-6">
            <div>
                <Sidebar/>
            </div>
            <div className='lg:col-span-5'>
                {children}
            </div>
        </div>
    </section>
  )
}

export default AdminLayout