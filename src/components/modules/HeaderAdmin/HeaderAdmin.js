import Link from 'next/link'
import React from 'react'

function HeaderAdmin() {
  return (
    <section className="bg-white p-3 text-primary rounded-md mb-6">
        <div className="flex justify-center gap-4 sm:justify-between items-center flex-wrap">
            <h5 className="block font-roboto-black text-2xl font-black">Welcome Back Admin</h5>
            <div className="flex items-center gap-4">
                <Link href='/' className='btn_primary'>Go Home</Link>
                <button className='btn_primary bg-red-400 hover:bg-red-600 cursor-pointer'>Exit</button>
            </div>
        </div>
    </section>
  )
}

export default HeaderAdmin