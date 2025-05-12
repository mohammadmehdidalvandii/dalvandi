import AdminLayout from '@/components/layout/AdminLayout'
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
    </AdminLayout>
  )
}

export default page