import Link from 'next/link';
import React from 'react';
import { MdDelete } from 'react-icons/md';

function Message() {
  return (
    <section className="admin_box py-6">
          <div className="block static">
            <h6 className="block font-roboto-black text-xl text-primary">Messages Management</h6>
        </div>
        <div className="grid gap-4 mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2    
         *:block *:p-4 *:bg-white *:drop-shadow-md *:rounded-sm *:border-l-3 *:border-secondary-200
        *:duration-300 *:hover:bg-[#e8f0f8]
        ">
            <div>
                <h6 className="block font-roboto-black text-lg text-primary">John doe</h6>
                <span className="block mt-4 ">Project shop</span>
                <p className="block font-roboto-light text-sm text-text-100 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, illum officiis. Deserunt perferendis neque esse distinctio repellendus veritatis unde illum!</p>
                <Link href='' target='_blank' className='block font-roboto-light text-md text-text-200 duration-300 hover:text-secondary-200 mt-4'>JohnDoe@gmail.com</Link>
                <button className="btn_cancel w-8 h-8 rounded-[50%] mt-4 cursor-pointer"><MdDelete/></button>
            </div>
            <div>
                <h6 className="block font-roboto-black text-lg text-primary">John doe</h6>
                <span className="block mt-4 ">Project shop</span>
                <p className="block font-roboto-light text-sm text-text-100 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, illum officiis. Deserunt perferendis neque esse distinctio repellendus veritatis unde illum!</p>
                <Link href='' target='_blank' className='block font-roboto-light text-md text-text-200 duration-300 hover:text-secondary-200 mt-4'>JohnDoe@gmail.com</Link>
                <button className="btn_cancel w-8 h-8 rounded-[50%] mt-4 cursor-pointer"><MdDelete/></button>
            </div>
            <div>
                <h6 className="block font-roboto-black text-lg text-primary">John doe</h6>
                <span className="block mt-4 ">Project shop</span>
                <p className="block font-roboto-light text-sm text-text-100 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, illum officiis. Deserunt perferendis neque esse distinctio repellendus veritatis unde illum!</p>
                <Link href='' target='_blank' className='block font-roboto-light text-md text-text-200 duration-300 hover:text-secondary-200 mt-4'>JohnDoe@gmail.com</Link>
                <button className="btn_cancel w-8 h-8 rounded-[50%] mt-4 cursor-pointer"><MdDelete/></button>
            </div>
            <div>
                <h6 className="block font-roboto-black text-lg text-primary">John doe</h6>
                <span className="block mt-4 ">Project shop</span>
                <p className="block font-roboto-light text-sm text-text-100 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, illum officiis. Deserunt perferendis neque esse distinctio repellendus veritatis unde illum!</p>
                <Link href='' target='_blank' className='block font-roboto-light text-md text-text-200 duration-300 hover:text-secondary-200 mt-4'>JohnDoe@gmail.com</Link>
                <button className="btn_cancel w-8 h-8 rounded-[50%] mt-4 cursor-pointer"><MdDelete/></button>
            </div>
            <div>
                <h6 className="block font-roboto-black text-lg text-primary">John doe</h6>
                <span className="block mt-4 ">Project shop</span>
                <p className="block font-roboto-light text-sm text-text-100 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, illum officiis. Deserunt perferendis neque esse distinctio repellendus veritatis unde illum!</p>
                <Link href='' target='_blank' className='block font-roboto-light text-md text-text-200 duration-300 hover:text-secondary-200 mt-4'>JohnDoe@gmail.com</Link>
                <button className="btn_cancel w-8 h-8 rounded-[50%] mt-4 cursor-pointer"><MdDelete/></button>
            </div>
        </div>
    </section>
  )
}

export default Message