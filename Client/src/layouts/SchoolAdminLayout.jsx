import React from 'react'

const SchoolAdminLayout = () => {
  return (
    <div className='flex'>
      <SchoolAdminSideNav />
      <div>
        <Navbar />
      </div>
    </div>
  )
}

export default SchoolAdminLayout