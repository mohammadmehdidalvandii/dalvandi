"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdHome } from "react-icons/md";
import { FaDiagramProject ,FaFileLines ,FaMessage   } from "react-icons/fa6";
import { FaTimes, FaTools } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { usePathname } from 'next/navigation';


function Sidebar({user}) {
    const [activeMen , setActiveMenu] = useState('/Admin');
    const [menu , setMenu] = useState(false);
    const pathname = usePathname();

    const handlerShowMenu = () =>{
        setMenu(true)
    };
    const handlerExitMenu = () =>{
        setMenu(false)
    }

    useEffect(()=>{
        const location = pathname;
        setActiveMenu(location);
    },[pathname])

  return (
    <section className="p-4 bg-primary lg:h-screen text-white sticky top-0 z-90">
        <div className="hidden lg:block">
                <div className="flex flex-col justify-center items-center ">
            <Image src='/assets/images/user.png' alt='user admin' width={120} height={120} className='rounded-[50%] border-5 border-secondary-200'/>
            <h5 className="block font-roboto-bold  text-xl mt-6">{user}</h5>
            </div>
        <ul className="block mt-8">
            <li className={activeMen === '/Admin' ? "admin_item admin_linkActive" :"admin_item"}>
                <Link href='/Admin' className='admin_link'> 
                <span className="">
                    <MdHome/>
                </span>
                Dashboard</Link>
            </li>
            <li className={activeMen === '/Admin/Projects' ? "admin_item admin_linkActive" :"admin_item"}>
                <Link href='/Admin/Projects' className='admin_link'> 
                <span><FaDiagramProject/></span>
                Projects</Link>
            </li>
            <li className={activeMen === '/Admin/Skills' ? "admin_item admin_linkActive" :"admin_item"}>
                <Link href='/Admin/Skills' className='admin_link'> 
                <span ><FaTools/></span>
                Skills</Link>
            </li>
            <li className={activeMen === '/Admin/Resume' ? "admin_item admin_linkActive" :"admin_item"}>
                <Link href='/Admin/Resume' className='admin_link'> 
                <span><FaFileLines /></span>
                Resume</Link>
            </li>
            <li className={activeMen === '/Admin/Messages' ? "admin_item admin_linkActive" :"admin_item"}>
                <Link href='/Admin/Messages' className='admin_link'> 
                <span><FaMessage/></span>
                Message</Link>
            </li>
            <li className={activeMen === '/Admin/Settings' ? "admin_item admin_linkActive" :"admin_item"}>
                <Link href='/Admin/Settings' className='admin_link'> 
                <span ><IoSettings/></span>
                Setting</Link>
            </li>
        </ul>
        </div>
        <div className="flex justify-between items-center lg:hidden">
            <h6 className="block font-robot-black font-black text-3xl">Admin Panel</h6>
            <span className="flex items-center justify-center text-2xl w-10 h-10 bg-secondary-100 rounded-[50%] cursor-pointer duration-300 hover:bg-secondary-200"
            onClick={handlerShowMenu}
            >
                <HiMiniBars3CenterLeft/>
            </span>
            {menu && (
                  <div className="box_shadow p-0">
                <div className="block bg-primary  w-[300px] z-90 p-4 h-screen">
                    <span className="flex items-center justify-center text-2xl w-10 h-10 bg-secondary-100 rounded-[50%] cursor-pointer duration-300 hover:bg-secondary-200"
                        onClick={handlerExitMenu}
                    >
                        <FaTimes/>
                    </span>
                         <ul className="block mt-8">
            <li className={activeMen === '/Admin' ? "admin_item admin_linkActive" :"admin_item"}>
                <Link href='/Admin' className='admin_link'> 
                <span className="">
                    <MdHome/>
                </span>
                Dashboard</Link>
            </li>
            <li className={activeMen === '/Admin/Projects' ? "admin_item admin_linkActive" :"admin_item"}>
                <Link href='/Admin/Projects' className='admin_link'> 
                <span className="/Admin/Projects"><FaDiagramProject/></span>
                Projects</Link>
            </li>
            <li className={activeMen === '/Admin/Skills' ? "admin_item admin_linkActive" :"admin_item"}>
                <Link href='/Admin/Skills' className='admin_link'> 
                <span><FaTools/></span>
                Skills</Link>
            </li>
            <li className={activeMen === '/Admin/Resume' ? "admin_item admin_linkActive" :"admin_item"}>
                <Link href='/Admin/Resume' className='admin_link'> 
                <span><FaFileLines /></span>
                Resume</Link>
            </li>
            <li className={activeMen === '/Admin/Messages' ? "admin_item admin_linkActive" :"admin_item"}>
                <Link href='/Admin/Messages' className='admin_link'> 
                <span ><FaMessage/></span>
                Message</Link>
            </li>
            <li className={activeMen === '/Admin/Settings' ? "admin_item admin_linkActive" :"admin_item"}>
                <Link href='/Admin/Settings' className='admin_link'> 
                <span ><IoSettings/></span>
                Setting</Link>
            </li>
        </ul>
                </div>
            </div>
            )}
        </div>
    </section>
  )
}

export default Sidebar