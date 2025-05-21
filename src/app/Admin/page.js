import AdminLayout from '@/components/layout/AdminLayout'
import MessageActivity from '@/components/template/admin/MessageActivity/MessageActivity'
import Stats from '@/components/template/admin/Stats/Stats'
import React from 'react'
import ProjectModel from '@/models/Projects';
import ActivityModel from '@/models/Activities'
import MessagesModel from '@/models/Message'
import connectToDB from '@/config/db';

export const metadata = {
  title:"My Personal Website | Dashboard",
  description:"Welcome to my personal website",
}

async function page() {
  await connectToDB()
  const projects = await ProjectModel.find()
  const messages = await MessagesModel.find().sort({createdAt:-1}).limit(3)
  const activities = await ActivityModel.find().sort({createdAt:-1}).limit(3)
  return (
    <AdminLayout>
        <Stats projects={projects} messages={messages}/>
        <MessageActivity messages={messages} activities={activities}/>
    </AdminLayout>
  )
}

export default page