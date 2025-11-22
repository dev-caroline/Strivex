import React from 'react'
import { AdminSideNav } from '../components/SideNav'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex'>
      <AdminSideNav/>
      <div>
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout