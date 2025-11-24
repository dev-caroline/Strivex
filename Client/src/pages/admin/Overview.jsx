import React from 'react'

const Overview = () => {
  return (
    <div className='px-4'>
      <div className='flex justify-between'>
        <div>
          <h1 className='fs-2 mt-4'>Admin Overview</h1>
          <h6>Review system activity and manage core administrative functions.</h6>
        </div>
        <div>
          <button className='p-3  rounded-2 fw-bold fs-6 mt-4  border'>Invite new User !</button>
        </div>
      </div>

      <div className='mt-11 flex justify-between gap-3'>
        <div className='w-1/3 border p-3' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4'>Total Schools</h4>
          <p className='text-4xl fw-bold text-center mt-2'>0</p>
        </div>

        <div className='w-1/3 border p-3' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4'>Total Users</h4>
          <p className='text-4xl fw-bold text-center mt-2'>0</p>
        </div>

        {/* <div className='w-1/4 border p-3' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4'>Total Students</h4>
          <p className='text-4xl fw-bold text-center mt-2'>0</p>
        </div> */}

        <div className='w-1/3 border p-3' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4'>Active Reports</h4>
          <p className='text-4xl fw-bold text-center mt-2'>0</p>
        </div>
      </div>

      <div className='flex justify-between mt-5 border p-1 gap-3'>
        <h5 className='text-yellow-800 p-2 rounded-md text-sm'> 💡 You have a new request access </h5>
        <button className=' text-white border px-13 rounded fw-bold' style={{ backgroundColor: '#A43C3C' }}>Review</button>
      </div>

      <div className='mt-18'>
        <h3 className='mt-'>Recent Activities</h3>
        <div className='flex gap-3 mt-2'>
          <div className='bg-gray-300 rounded-xl col-8 p-4 fs-5 mt-4 flex-wrap flex overflow-hidden shadow ' style={{ maxHeight: '30vh' }}>
            <table className='table'>
              <tr>edrftgyhujiko</tr>
              <tr>edrftgyhujiko</tr>
              <tr>edrftgyhujiko</tr>
              <tr>edrftgyhujiko</tr>
              <tr>edrftgyhujiko</tr>
              <tr>edrftgyhujiko</tr>
            </table>
          </div>
          <div className='bg-gray-200 rounded-xl col-4 mt-4 shadow p-4' style={{ height: '30vh' }}>
            User Statistics
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview