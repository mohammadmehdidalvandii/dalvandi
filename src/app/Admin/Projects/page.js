import AdminLayout from '@/components/layout/AdminLayout'
import ProjectManagement from '@/components/template/admin/ProjectManagement/ProjectManagement'
import React from 'react'

export const metadata = {
  title:"My Personal Website | Dashboard-Project",
  description:"Welcome to my personal website",
}

function page() {
  return (
    <AdminLayout>
        <ProjectManagement/>
    </AdminLayout>
  )
}

export default page