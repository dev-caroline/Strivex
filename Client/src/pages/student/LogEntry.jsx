import React from 'react'

const LogEntry = () => {
  return (
    <div className='px-4'>

      <form className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto mt-30">
        <h2 className="text-xl mb-4">Log Your Daily Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1 fw-bold">Date</label>
            <input type="date" className="w-full p-2 border rounded" defaultValue={new Date().toISOString().split("T")[0]} />
          </div>
          <div>
            <label className="block mb-1 fw-bold">Week</label>
            <select className="w-full p-2 border rounded">
              {Array.from({length: 23}, (_, i) => (
                <option key={i} value={`Week ${i+1}`}>Week {i+1}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 fw-bold">Task / Activity</label>
          <textarea className="w-full p-2 border rounded" rows="4" placeholder="Describe what you did today..."></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-1 fw-bold">Upload File / Evidence</label>
          <input type="file" className="w-full p-2 border rounded" />
        </div>

        <button type="submit" className="bg-[#800505] text-white px-6 py-2 rounded hover:bg-[#600404] transition">
          Submit Log Entry
        </button>
      </form>

    </div>
  )
}
export default LogEntry