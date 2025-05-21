import React from 'react'
import Sidebar from '../modules/Sidebar/Sidebar'
import HeaderAdmin from '../modules/HeaderAdmin/HeaderAdmin'
import { authAdmin } from '@/utils/serverHelper';
import { redirect } from 'next/navigation';


async function AdminLayout({children}) {
  
  const user  = await authAdmin();
  if(user){
    if(user.role !== "ADMIN"){
       redirect('/Login')
    }
  }else{
    return redirect('/Login')
  }

  return (
    <section className="block">
        <div className="grid lg:grid-cols-6 ">
            <div className=''>
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