import AdminLayout from '@/components/layout/AdminLayout'
import ResumeManagement from '@/components/template/admin/ResumeManagement/ResumeManagement'
import connectToDB from '@/config/db'
import React from 'react'
import WorkModel  from '@/models/Work';

export const metadata = {
  title:"My Personal Website | Dashboard-Resume",
  description:"Welcome to my personal website",
}

async function page() {
  await connectToDB();

  const works = await WorkModel.find().sort({createAt:-1}).lean();

  return (
    <AdminLayout>
       <ResumeManagement works={JSON.parse(JSON.stringify(works))}/>
    </AdminLayout>
  )
}

export default page