import React from 'react'

const AdminSettings = () => {
  return (
    <div className='px-4'>
      <div className='flex justify-between'>
        <div>
          <h1 className='fs-2 mt-4'>Admin Settings</h1>
          <h6>Manage platform-wide configuration, security, and account preferences.</h6>
        </div>
        <div>
        </div>
      </div>

      <div className='mt-20 flex justify-center'>
        <div className='border col-6 p-4' style={{height: '50vh'}}>
          <h1 className='fs-2 mt-4'>Account Settings</h1>
          <p className='mt-4'>Full Name</p>
          <input type="text" className='form-control' />
          <p className='mt-4'>Email</p>
          <input type="text" className='form-control' />
          <p className='mt-4'>Password</p>
          <input type="text" className='form-control' />
      <div className='flex justify-end p-3 gap-3'>
        <button className=' text-white border px-5  py-2 rounded fw-bold' style={{ backgroundColor: '#A43C3C' }}>Save</button>
      </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSettings