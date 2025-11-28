import React, { useState } from 'react'

const Report = () => {
    const [selectedWeek, setSelectedWeek] = useState('Week 1')

    const handleDownload = () => {
        // Placeholder for download logic
        alert(`Downloading report for ${selectedWeek}`)
    }

    return (
        <div className='px-4'>
            <div className='flex justify-between'>
                {/* <div>
                    <h1 className='fs-2 mt-4'>Weekly Reports</h1>
                    <h6>View and download your verified weekly reports.</h6>
                </div> */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-18">
                <h2 className="text-xl  mb-4">Select Report</h2>
                <div className="mb-4">
                    <label className="block mb-1 fw-bold">Week</label>
                    <select
                        value={selectedWeek}
                        onChange={(e) => setSelectedWeek(e.target.value)}
                        className="w-full p-2 border rounded"
                    >
                        {Array.from({ length: 23 }, (_, i) => (
                            <option key={i} value={`Week ${i + 1}`}>Week {i + 1}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <h3 className="fw-bold">Report Preview for {selectedWeek}</h3>
                    <div className="border p-4 rounded bg-gray-50">
                        <p><strong>Student:</strong> Caroline Ajiboye</p>
                        <p><strong>Supervisor:</strong> Prof. Adeosun</p>
                        <p><strong>Total Hours Logged:</strong> 9 hours</p>
                        <p><strong>Activities:</strong></p>
                        <ul>
                            <li>Monday: 2 hours - Research and planning</li>
                            <li>Tuesday: 1.5 hours - Data collection</li>
                            <li>Wednesday: 3 hours - Analysis and reporting</li>
                            <li>Thursday: 0 hours - No activity</li>
                            <li>Friday: 2.5 hours - Final review</li>
                        </ul>
                        <p><strong>Status:</strong> Verified</p>
                    </div>
                </div>

                <button
                    onClick={handleDownload}
                    className="bg-[#800505] text-white px-6 py-2 rounded hover:bg-[#600404] transition"
                >
                    Download Report
                </button>
            </div>
        </div>
    )
}

export default Report