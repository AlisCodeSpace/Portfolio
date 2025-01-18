import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <main className='flex items-center justify-center w-full min-h-screen'>
      <div className='flex items-center justify-center gap-10 w-3/5'>
        {/* Sidebar */}
        <div className='container min-w-[300px]'>
          <Sidebar />
        </div>

        
        <div className='container relative min-w-[900px]'>
          {/* Navbar */}
          <Navbar />

          {/* Page Title */}
          <h1 className='h1'>About Me</h1>

          {/* Main Content */}
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default Home
