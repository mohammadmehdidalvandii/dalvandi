import AdminLayout from '@/components/layout/AdminLayout'
import Setting from '@/components/template/admin/Setting/Setting'
import React from 'react'

export const metadata = {
  title:"My Personal Website | Dashboard-Settings",
  description:"Welcome to my personal website",
}

function page() {
  return (
    <AdminLayout>
        <Setting/>
    </AdminLayout>
  )
}

export default page