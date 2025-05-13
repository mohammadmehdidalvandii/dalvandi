import AdminLayout from '@/components/layout/AdminLayout'
import SkillsManagement from '@/components/template/admin/SkillsManagement/SkillsManagement'
import React from 'react'

export const metadata = {
  title:"My Personal Website | Dashboard-Skills",
  description:"Welcome to my personal website",
}

function page() {
  return (
    <AdminLayout>
        <SkillsManagement/>
    </AdminLayout>
  )
}

export default page