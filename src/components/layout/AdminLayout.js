import React from 'react'



function AdminLayout({children}) {
  return (
    <section className="block p-2">
        <div className="grid gap-2 lg:grid-cols-6 ">
            <div>
                this is sidebar
            </div>
            <div className='lg:col-span-5'>
                {children}
            </div>
        </div>
    </section>
  )
}

export default AdminLayout