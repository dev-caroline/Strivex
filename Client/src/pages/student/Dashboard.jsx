import React from 'react'

const Dashboard = () => {
  return (
    <div className='px-4'>
      <div className='flex justify-between'>
        <div>
          <h1 className='fs-2 mt-4'>Welcome, Caroline Ajiboye</h1>
          <h6>Track your daily log entries and download verified weekly reports.</h6>
        </div>
        <div>
          <h3 className='p-3  rounded-2 fw-bold fs-6 mt-4  border-b'>Supervisor - Prof. Adeosun</h3>
        </div>
      </div>

      <div className='mt-11 flex justify-between gap-3'>
        <div className='w-1/3 border p-3' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4'>Total Log Entries</h4>
          <p className='text-4xl fw-bold text-center mt-2'>0</p>
        </div>

        <div className='w-1/3 border p-3' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4'>Total Report</h4>
          <p className='text-4xl fw-bold text-center mt-2'>0</p>
        </div>

        <div className='w-1/3 border p-3' style={{ height: '18vh' }} >
          <h4 className='text-center mt-4'>Current Week</h4>
          <p className='text-4xl fw-bold text-center mt-2'>0</p>
        </div>
      </div>

      <div className='flex justify-between mt-5 border p-1 gap-3'>
        <h5 className='text-yellow-800 p-2 rounded-md text-sm'> ⚠️ Log Daily Entry </h5>
        <button className=' text-white border px-13 rounded fw-bold' style={{ backgroundColor: '#A43C3C' }}>Log Entry</button>
      </div>

      <div className='mt-10'>
        <div className='overflow-auto' >
          <table className='table mt-4 p-3'>
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Task Discription</th>
                <th scope="col">Proof URL</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>6</td> */}
                <td>
                  <button>...</button>
                </td>

              </tr>

              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>6</td> */}
                <td>
                  <button>...</button>
                </td>

              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>6</td> */}
                <td>
                  <button>...</button>
                </td>


              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>6</td> */}
                <td>
                  <button>...</button>
                </td>

              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>6</td> */}
                <td>
                  <button>...</button>
                </td>

              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>6</td> */}
                <td>
                  <button>...</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>6</td> */}
                <td>
                  <button>...</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>6</td> */}
                <td>
                  <button>...</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>6</td> */}
                <td>
                  <button>...</button>
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard