import React from 'react'

function MessageActivity() {
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
                    <li>
                        <span>John Doe</span>
                        <span>1 hours age</span>
                    </li>
                    <li>
                        <span>John Doe</span>
                        <span>2 hours age</span>
                    </li>
                    <li>
                        <span>John Doe</span>
                        <span>4 hours age</span>
                    </li>
                    
                </ul>
            </div>
            <div >
                <h6 className="block font-roboto-bold text-xl border-b-2 border-gray-300 pb-4 ">Recent Activity</h6>
                <ul className="block mt-6
                     *:flex *:justify-between *:items-center *:bg-primary *:text-white *:p-3 *:rounded-sm *:mb-2
                    *:duration-300 *:hover:bg-primary/80
                ">
                      <li>
                        <span>New project added: E-commerce Website</span>
                        <span>1 day ago</span>
                    </li>
                    <li>
                        <span>Updated About page content</span>
                        <span>2 day ago</span>
                    </li>
                    <li>
                        <span>New resume version uploaded</span>
                        <span>3 day ago</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default MessageActivity