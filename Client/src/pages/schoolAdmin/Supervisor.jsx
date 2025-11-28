import React from 'react'

const Supervisor = () => {
  return (
    <div className='p-4'>
      <div className="flex gap-3 mt-3">
        <input type="text" placeholder="Search supervisor..." className="border rounded p-2 flex-1" />
        <select className="border rounded p-2">
          <option>CSC</option>
          <option>INS</option>
          <option>CYB</option>
        </select>
        <select className="border rounded p-2">
          <option>Active</option>
          <option>Not Active</option>
        </select>
      </div>

      <div className="flex justify-end mt-4">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
          + Add Supervisor
        </button>

      </div>

      <div className='border mt-5 p-4 overflow-auto scroll-auto' style={{ height: '69vh' }}>
        <div className='flex justify-between p-1 gap-3'>
          <h5 className='p-2 fs-3'>All Supervisors available for SIWES</h5>
        </div>

        <div>
          <table className='table mt-4 p-3'>
            <thead>
              <tr>
                <th scope="col">Full name</th>
                <th scope="col">Staff ID</th>
                <th scope="col">Department</th>
                <th scope="col">Email</th>
                <th scope="col">Students Assigned</th>
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
                <td>6</td>
                <td>7</td>
                <td>
                  <button type="button">...</button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>
                  <button type="button">...</button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>
                  <button type="button">...</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Supervisor