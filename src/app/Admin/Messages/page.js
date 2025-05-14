import AdminLayout from '@/components/layout/AdminLayout'
import Message from '@/components/template/admin/Message/Message'
import React from 'react'

export const metadata = {
  title:"My Personal Website | Dashboard-Messages",
  description:"Welcome to my personal website",
}


function page() {
  return (
    <AdminLayout>
        <Message/>
    </AdminLayout>
  )
}

export default page