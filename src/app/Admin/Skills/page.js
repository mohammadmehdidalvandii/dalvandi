import AdminLayout from '@/components/layout/AdminLayout'
import SkillsManagement from '@/components/template/admin/SkillsManagement/SkillsManagement'
import connectToDB from '@/config/db'
import React from 'react'
import skillModel from '@/models/Skills';

export const metadata = {
  title:"My Personal Website | Dashboard-Skills",
  description:"Welcome to my personal website",
}

async function page() {
  await connectToDB()

  const skills = await skillModel.find().lean()

  return (
    <AdminLayout>
        <SkillsManagement items={JSON.parse(JSON.stringify(skills))}/>
    </AdminLayout>
  )
}

export default page