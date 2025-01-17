import React, { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
const HomeLayout = ({children}:{children:ReactNode}) => {
  return (
    <main className='relative'>
        <Navbar/>
        <div className='flex'>
            <Sidebar />
            <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px=14"></section>
        </div>
        {children}
    </main>
  )
}

export default HomeLayout