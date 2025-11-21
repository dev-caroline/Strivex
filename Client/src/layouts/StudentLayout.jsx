import React from 'react'
import SideNav from '../components/SideNav'
import Navbar from '../components/Navbar'

const StudentLayout = () => {
  return (
    <div className='flex'>
      <SideNav/>
      <Navbar/>
    </div>
  )
}

export default StudentLayout