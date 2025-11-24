import React from 'react'

const Users = () => {
  return (
    <div className='px-4'>
      <div className='flex justify-between'>
        <div>
          <h1 className='fs-2 mt-4'>User Management</h1>
          <h6>View and manage all users across registered schools.</h6>
        </div>
        <div>
          {/* <button className='p-3  rounded-2 fw-bold fs-6 mt-4  border'>Delete all !</button> */}
          <div className='flex gap-2 mt-5 border-b'>
            <h5 className=' rounded fw-bold'>Total Users -  </h5>
            <h4 className=' rounded fw-bold'>0</h4>

          </div>
        </div>
      </div>

      <div className='border mt-5 p-4' style={{ height: '75vh' }} >
        <div className='flex justify-between p-1 gap-3'>
          <h5 className='text-yellow-800 p-2 rounded-md fs-3'>All Users </h5>
          <div className='flex gap-2'>
            {/* <button className=' text-white border px-13 p-3 rounded fw-bold' style={{ backgroundColor: '#A43C3C' }}>Add School +</button> */}
            <button className=' text-white border px-13 p-3 rounded fw-bold' style={{ backgroundColor: '#A43C3C' }}>Delete all</button>

          </div>
        </div>
        <div>
          <table className='table mt-4 p-3'>
            <thead >
              <th>User name</th>
              <th>Login email</th>
              <th>School ID</th>
              <th>Role</th>
              <th>Status</th>
            </thead>
            <tbody>
              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>
                  <button>...</button>
                </th>
              </tr>

              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                  <th>
                  <button>...</button>
                </th>

              </tr>
              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                  <th>
                  <button>...</button>
                </th>


              </tr>
              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                  <th>
                  <button>...</button>
                </th>


              </tr>
              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                  <th>
                  <button>...</button>
                </th>


              </tr>
              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                  <th>
                  <button>...</button>
                </th>



              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users