import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'

const Home = () => {
  return (
    <main className='flex items-center justify-center w-full min-h-screen'>
      <div className='flex items-center justify-center gap-10'>
        {/* Sidebar */}
        <div className='wrapper min-w-[300px] max-w-[300px]'>
          <Sidebar />
        </div>

        
        <div className='wrapper relative min-w-[900px] max-w-[900px]'>
          {/* Navbar */}
          <Navbar />

          {/* Page Title */}
          <PageTitle />

          {/* Main Content */}
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default Home
