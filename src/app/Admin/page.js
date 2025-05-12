import AdminLayout from '@/components/layout/AdminLayout'
import MessageActivity from '@/components/template/admin/MessageActivity/MessageActivity'
import Stats from '@/components/template/admin/Stats/Stats'
import React from 'react'


export const metadata = {
  title:"My Personal Website | Dashboard",
  description:"Welcome to my personal website",
}

function page() {
  return (
    <AdminLayout>
        <Stats/>
        <MessageActivity/>
    </AdminLayout>
  )
}

export default page