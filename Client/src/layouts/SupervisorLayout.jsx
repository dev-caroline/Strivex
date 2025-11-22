import React from 'react'
import { SupervisorSideNav } from '../components/SideNav'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const SupervisorLayout = () => {
  return (
    <div className='flex'>
      <SupervisorSideNav />
      <div>
        <Navbar />
        <Outlet/>
      </div>
    </div>
  )
}

export default SupervisorLayout