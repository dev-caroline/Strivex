import React from 'react'
import {SchoolAdminSideNav} from '../components/SideNav'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const SchoolAdminLayout = () => {
  return (
    <div className='flex'>
      <SchoolAdminSideNav/>
      <div>
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default SchoolAdminLayout