import React from 'react'

function MessageActivity({activities , messages}) {
    const options = { hour: '2-digit', minute: '2-digit', hour12: true }
  return (
    <section className="admin_box text-primary">
        <div className="grid gap-4 sm:gird-cols-1 md:grid-cols-2
            *:block *:p-4 *:bg-white *:drop-shadow-md *:rounded-sm *:border-t-3 *:border-secondary-200
        ">
            <div >
                <h6 className="block font-roboto-bold text-xl border-b-2 border-gray-300 pb-4 ">Recent Messages</h6>
                <ul className="block mt-6
                    *:flex *:justify-between *:items-center *:bg-primary *:text-white *:p-3 *:rounded-sm *:mb-2
                    *:duration-300 *:hover:bg-primary/80
                ">
                    {messages.length > 0 ? (messages.map((message)=>(
                    <li key={message._id}>
                        <span>{message.name}</span>
                        <span>{new Date(message.updatedAt).toLocaleString('en-us' , options)} hours ago</span>
                    </li>
                    ))):
                        (
                            <span>There is no message.</span>
                        )
                    }
                    
                </ul>
            </div>
            <div >
                <h6 className="block font-roboto-bold text-xl border-b-2 border-gray-300 pb-4 ">Recent Activity</h6>
                <ul className="block mt-6
                     *:flex *:justify-between *:items-center *:bg-primary *:text-white *:p-3 *:rounded-sm *:mb-2
                    *:duration-300 *:hover:bg-primary/80
                ">
                    {activities.length > 0 ? (activities.map((activity)=>(
                      <li key={activity._id}>
                        <span>{activity.action}</span>
                    </li>

                    ))) :(
                         <span>There is no Activities.</span>
                    )}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default MessageActivity