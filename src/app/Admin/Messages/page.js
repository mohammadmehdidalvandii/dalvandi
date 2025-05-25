import AdminLayout from '@/components/layout/AdminLayout'
import Message from '@/components/template/admin/Message/Message'
import React from 'react'
import connectToDB from '@/config/db'
import MessageModel from '@/models/Message';

export const metadata = {
  title:"My Personal Website | Dashboard-Messages",
  description:"Welcome to my personal website",
}


async function page() {
  await connectToDB();
  const messages = await MessageModel.find().sort({ createdAt: -1 }).lean();
  return (
    <AdminLayout>
        <Message messages={JSON.parse(JSON.stringify(messages))}/>
    </AdminLayout>
  )
}

export default page