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
          <h4 className='text-center mt-4'>Total Log Entry</h4>
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

      <div className='flex justify-between'>
        <div className='border mt-5'>ALERTS</div>
        <div className='mt-20 flex justify-end me-5 gap-4'>
          <button className='text-white px-4 py-2 rounded fw-bold' style={{ backgroundColor: '#A43C3C' }}>Log Entry</button>
          <button className='text-white px-4 py-2 rounded fw-bold' style={{ backgroundColor: '#A43C3C' }}>View Report</button>
          <button className='text-white px-4 py-2 rounded fw-bold' style={{ backgroundColor: '#A43C3C' }}>Settings</button>
        </div>
      </div>

      <div className='mt-25 flex gap-3' style={{ height: '35vh' }}>
        <div className='col-6 border p-3' >
          <h3 className='fs-4'>Calendar</h3>
          <div className='mt-3'>
            <p>November 2025</p>
            <div className='grid grid-cols-7 gap-1 mt-2'>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className='text-center text-sm fw-bold'>{day}</div>
              ))}
              {Array.from({ length: 30 }, (_, i) => (
                <div key={i} className={`text-center p-1 rounded ${i + 1 === 26 ? 'bg-blue-100' : ''}`}>{i + 1}</div>
              ))}
            </div>
          </div>
        </div>

        <div className='overflow-auto col-6 border p-3 fs-6' >
          <h3 className='fs-4'>Weekly Statistics</h3>
          <div className='text-center mt-4'>
            <svg width="100" height="100" className='mx-auto'>
              <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
              <circle cx="50" cy="50" r="40" stroke="#10b981" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="100.48" strokeLinecap="round" />
            </svg>
            <p className='mt-2 fw-bold'>60% Complete</p>
            <p className='text-sm'>Log Entries: 3 / 5</p>
            <p className='text-sm mt-1'>Keep up the good work!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 