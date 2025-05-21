import AdminLayout from '@/components/layout/AdminLayout'
import ProjectManagement from '@/components/template/admin/ProjectManagement/ProjectManagement'
import React from 'react'
import connectToDB from '@/config/db'
import ProjectsModel from '@/models/Projects';

export const metadata = {
  title:"My Personal Website | Dashboard-Project",
  description:"Welcome to my personal website",
}

 async function page() {
  await connectToDB();

  const projects = await ProjectsModel.find().sort({createdAt:-1}).lean()


  return (
    <AdminLayout>
        <ProjectManagement projects={JSON.parse(JSON.stringify(projects))}/>
    </AdminLayout>
  )
}

export default page