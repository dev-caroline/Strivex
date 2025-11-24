import React from 'react'

const SchoolAdminOverview = () => {
  return (
       <div className='px-4'>
      <div className='flex justify-between'>
        <div>
          <h1 className='fs-2 mt-4'>School Admin Overview</h1>
          <h6>Review school activity and manage core administrative functions.</h6>
        </div>
        <div>
          <button className='p-3  rounded-2 fw-bold fs-6 mt-4  border'>Add new user</button>
        </div>
      </div>

      <div className='mt-11 flex justify-between gap-3'>
        <div className='w-1/3 border p-3' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4'>Total Students Eligible</h4>
          <p className='text-4xl fw-bold text-center mt-2'>0</p>
        </div>

        <div className='w-1/3 border p-3' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4'>Total Supervisors</h4>
          <p className='text-4xl fw-bold text-center mt-2'>0</p>
        </div>

        <div className='w-1/3 border p-3' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4'>Total Reports</h4>
          <p className='text-4xl fw-bold text-center mt-2'>0</p>
        </div>
      </div>


          <div className='mt-5'>
            <h3>Recent Supervisor Requests</h3>
          <table className='table mt-4 p-3'>
            <thead >
              <th>Student name</th>
              <th>Matric Number</th>
              <th> Department</th>
              <th>Status</th>
            </thead>
            <tbody>
              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>
                  <button>...</button>
                </th>

              </tr>

              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>
                  <button>...</button>
                </th>

              </tr>
              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>
                  <button>...</button>
                </th>

              </tr>


            </tbody>
          </table>
        </div>

      <div className='mt-10'>
        <h3 className='mt-'>Recent Activities</h3>
        <div className='flex gap-3 mt-2'>
          <div className='bg-gray-200 rounded-xl col-12 p-4 fs-5 mt-4 overflow-y-hidden  shadow ' style={{ height: '20vh' }}>
              <p>edrftgyhujiko</p>
              <p>edrftgyhujiko</p>
              <p>edrftgyhujiko</p>
              <p>edrftgyhujiko</p>
              <p>edrftgyhujiko</p>
              <p>edrftgyhujiko</p>
              <p>edrftgyhujiko</p>
          </div>
          {/* <div className='bg-gray-300 rounded-xl col-2 mt-4 shadow p-4' style={{ height: '20vh' }}>
            <h4 className='text-center'>School ID </h4>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default SchoolAdminOverview