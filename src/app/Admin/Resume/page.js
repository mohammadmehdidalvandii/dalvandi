import AdminLayout from '@/components/layout/AdminLayout'
import ResumeManagement from '@/components/template/admin/ResumeManagement/ResumeManagement'
import React from 'react'

export const metadata = {
  title:"My Personal Website | Dashboard-Resume",
  description:"Welcome to my personal website",
}

function page() {
  return (
    <AdminLayout>
       <ResumeManagement/>
    </AdminLayout>
  )
}

export default page