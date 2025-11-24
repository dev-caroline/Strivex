import React from 'react'

const LogEntry = () => {
  return (
    <div className='px-4'>
      <div className='flex justify-between'>
        <div>
          <h1 className='fs-2 mt-4'>Log Entry</h1>
          <h6>Record your daily activities. Make sure to submit all tasks accurately.</h6>
        </div>
       
      </div>  

      <form className="bg-white p-6 rounded shadow-md col-8 mx-auto mt-5">
  <div className="mb-4">
    <label className="block mb-1 fw-bold">Date</label>
    <input type="date" className="w-full p-2 border rounded" defaultValue={new Date().toISOString().split("T")[0]} />
  </div>

  <div className="mb-4">
    <label className="block mb-1 fw-bold">Task / Activity</label>
    <textarea className="w-full p-2 border rounded" rows="4" placeholder="Describe what you did today..."></textarea>
  </div>

  <div className="mb-4 grid grid-cols-2 gap-4">
    <div>
      <label className="block mb-1 fw-bold">Start Time</label>
      <input type="time" className="w-full p-2 border rounded" />
    </div>
    <div>
      <label className="block mb-1 fw-bold">End Time</label>
      <input type="time" className="w-full p-2 border rounded" />
    </div>
  </div>

  <div className="mb-4">
    <label className="block mb-1 fw-bold">Upload File / Evidence</label>
    <input type="file" className="w-full p-2 border rounded" />
  </div>

  <button type="submit" className="bg-[#800505] text-white px-4 py-2 rounded">
    Submit Log Entry
  </button>
</form>

        </div>
  )
}
export default LogEntry