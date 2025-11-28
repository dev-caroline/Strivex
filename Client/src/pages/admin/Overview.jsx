import React from 'react'
import { Link } from 'react-router-dom'


const Overview = () => {

  return (
    <div className='px-4'>
      <div className='flex justify-between'>
        <div>
          <h1 className='fs-2 mt-4'>Admin Overview</h1>
          <h6>Review system activity and manage core administrative functions.</h6>
        </div>
        <div>
        </div>
      </div>

      <div className='mt-11 flex justify-between gap-3'>
        <div className='w-1/4 border p-3 rounded-lg shadow-sm bg-white' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4 text-gray-700'>Total Schools</h4>
          <p className='text-4xl fw-bold text-center mt-2 text-blue-600'>6</p>
        </div>

        <div className='w-1/4 border p-3 rounded-lg shadow-sm bg-white' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4 text-gray-700'>Total Users</h4>
          <p className='text-4xl fw-bold text-center mt-2 text-green-600'>1,250</p>
        </div>

        <div className='w-1/4 border p-3 rounded-lg shadow-sm bg-white' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4 text-gray-700'>Active Reports</h4>
          <p className='text-4xl fw-bold text-center mt-2 text-red-600'>23</p>
        </div>

        <div className='w-1/4 border p-3 rounded-lg shadow-sm bg-white' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4 text-gray-700'>Pending Requests</h4>
          <p className='text-4xl fw-bold text-center mt-2 text-yellow-600'>5</p>
        </div>
      </div>

      <div className='flex justify-between mt-5 border p-1 gap-3'>
        <h5 className='text-yellow-800 p-2 rounded-md text-sm'> ⚠️ System Alert - You have a new access request </h5>
        <Link to='/admin01/schools' >
          <button className=' text-white border px-10 py-2 rounded fw-bold' style={{ backgroundColor: '#A43C3C' }}>Review</button>
        </Link>
      </div>


      <div className='mt-18'>
        <h3 className='mt-4 mb-4 text-xl font-semibold'>Recent Activities</h3>
        <div className='flex gap-3 mt-2'>
          <div className='bg-gray-50 rounded-xl col-8 p-4 fs-5 mt-4 flex-wrap flex overflow-hidden shadow-sm' style={{ maxHeight: '30vh' }}>
            <table className='table w-full'>
              <thead>
                <tr className='border-b'>
                  <th className='text-left py-2'>Activity</th>
                  <th className='text-left py-2'>User</th>
                  <th className='text-left py-2'>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b'>
                  <td className='py-2'>New school added: Greenfield High</td>
                  <td className='py-2'>Admin</td>
                  <td className='py-2'>2 hours ago</td>
                </tr>
                <tr className='border-b'>
                  <td className='py-2'>User invited: john.doe@example.com</td>
                  <td className='py-2'>Admin</td>
                  <td className='py-2'>4 hours ago</td>
                </tr>
                <tr className='border-b'>
                  <td className='py-2'>Report submitted by Riverside Academy</td>
                  <td className='py-2'>Supervisor</td>
                  <td className='py-2'>1 day ago</td>
                </tr>
                <tr className='border-b'>
                  <td className='py-2'>Access request approved</td>
                  <td className='py-2'>Admin</td>
                  <td className='py-2'>2 days ago</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='bg-gray-100 rounded-xl col-4 mt-4 shadow-sm p-4' style={{ height: '30vh' }}>
            <h4 className='text-lg font-semibold mb-4'>User Statistics</h4>
            <div className='space-y-2'>
              <div className='flex justify-between'>
                <span>Students:</span>
                <span className='font-bold'>950</span>
              </div>
              <div className='flex justify-between'>
                <span>Supervisors:</span>
                <span className='font-bold'>48</span>
              </div>
              <div className='flex justify-between'>
                <span>School Admins:</span>
                <span className='font-bold'>6</span>
              </div>
              <div className='flex justify-between'>
                <span>System Admins:</span>
                <span className='font-bold'>1</span>
              </div>
            </div>
            <div className='mt-4'>
              <h5 className='text-sm font-semibold mb-2'>System Health</h5>
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div className='bg-green-600 h-2 rounded-full' style={{ width: '95%' }}></div>
              </div>
              <p className='text-xs text-gray-600 mt-1'>95% Uptime</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Overview