import React from 'react'
import { AdminSideNav } from '../components/SideNav'
import Navbar from '../components/Navbar'

const AdminLayout = () => {
  return (
    <div className='flex'>
      {/* <SideNav/> */}
      <AdminSideNav/>
      <div>
        <Navbar/>
      </div>
    </div>
  )
}

export default AdminLayout