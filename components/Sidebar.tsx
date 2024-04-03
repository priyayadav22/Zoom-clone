'use client'
import React from 'react'
import { sidebarlinks } from "@/constants";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className='sticky left-0 top-0 flex 
    h-screen w-fit flex-col justify-between bg-blue-500 pt-28 text-black max-sm:hidden lg:w-[265px] '>
      <div className='flex flex-col gap-12 '>
        {sidebarlinks.map((link) => {
          const isActive = pathname===link.route || pathname.startsWith(link.route);
          return(
            <Link href={link.route}
            key={link.label}
            className='text-center '
           >
          
          {link.imgUrl}
           <p className='text-lg font-semibold'>{link.label}</p>
           </Link>
        )
        })}
      </div>
      sidebar</section>
  )
}

export default Sidebar