import React from 'react'
import { SupervisorSideNav } from '../components/SideNav'
import Navbar from '../components/Navbar'

const SupervisorLayout = () => {
  return (
    <div className='flex'>
      <SupervisorSideNav />
      <div>
        <Navbar />
      </div>
    </div>
  )
}

export default SupervisorLayout