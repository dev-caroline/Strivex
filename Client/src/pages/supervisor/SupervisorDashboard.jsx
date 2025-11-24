import React from 'react'

const SupervisorDashboard = () => {
  return (
    <div className='px-4'>
      <div className='flex justify-between'>
        <div>
          <h1 className='fs-2 mt-4'>Supervisor Overview</h1>
          <h6>Stay updated on student progress and pending reviews.</h6>
        </div>
      </div>

      <div className='mt-11 flex justify-between gap-3'>
        <div className='w-1/4 border p-3' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4'>Assigned Students</h4>
          <p className='text-4xl fw-bold text-center mt-2'>0</p>
        </div>

        <div className='w-1/4 border p-3' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4'>Pending Log Reviews</h4>
          <p className='text-4xl fw-bold text-center mt-2'>0</p>
        </div>

        <div className='w-1/4 border p-3' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4'>Approved Logs</h4>
          <p className='text-4xl fw-bold text-center mt-2'>0</p>
        </div>

        <div className='w-1/4 border p-3' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4'>Weekly Report Due</h4>
          <p className='text-4xl fw-bold text-center mt-2'>0</p>
        </div>

      </div>

      <div className='flex justify-between mt-5 border p-1 gap-3'>
        <h5 className='text-yellow-800 p-2 rounded-md text-sm'> ⚠️ You have a new Log Entry </h5>
        <button className=' text-white border px-13 rounded fw-bold' style={{ backgroundColor: '#A43C3C' }}>Review</button>
      </div>

      <div className='mt-18'>
        <h3 className='mt-'>Student Attention Table</h3>
        <div className='flex gap-3 mt-2'>
          <div className='rounded-xl col-8 p-4 fs-5 mt-4 flex-wrap flex overflow-hidden shadow ' style={{ maxHeight: '30vh' }}>
            <table className='table overflow-auto'>
                <thead>
                  <tr>
                    <th scope="col">Matric Number</th>
                    <th scope="col">Current Week</th>
                    <th scope="col">Logs Approved</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>h</td>
                    <td>3</td>
                    <td>w</td>
                    <td>e</td>
                  </tr>
                  <tr>
                    <td>h</td>
                    <td>3</td>
                    <td>w</td>
                    <td>e</td>
                  </tr>
                  <tr>
                    <td>h</td>
                    <td>3</td>
                    <td>w</td>
                    <td>e</td>
                  </tr>

                  <tr>
                    <td>h</td>
                    <td>3</td>
                    <td>w</td>
                    <td>e</td>
                  </tr>
                </tbody>
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

export default SupervisorDashboard