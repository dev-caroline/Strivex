import React from 'react'
import { SchoolAdminSideNav } from '../components/SideNav'
import Navbar from '../components/Navbar'

const SchoolAdmin = () => {
  return (
    <div className='flex'>
      <SchoolAdminSideNav/>
      <div>
        <Navbar/>
      </div>
    </div>
  )
}

export default SchoolAdmin