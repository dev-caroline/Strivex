import React from 'react'
import SideNav from '../components/SideNav'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'


const StudentLayout = () => {
  return (
    <div className='flex'>
      <SideNav/>
      <div>
      <Navbar/>
      {/* <Outlet/> */}
      </div>
    </div>
  )
}

export default StudentLayout