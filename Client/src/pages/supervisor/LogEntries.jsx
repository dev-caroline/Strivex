import React from 'react'

const LogEntries = () => {
  return (
    <div className='p-4'>

      <div className="flex gap-3 mt-5">
        <input type="text" placeholder="Search report..." className="border rounded p-2 flex-1" />
        <select className="border rounded p-2">
          <option>Pending</option>
          <option>Approved</option>
        </select>
      </div>
      <div className='border mt-5 p-4 overflow-auto scroll-auto' style={{ height: '73vh' }} >
        <div className='flex justify-between p-1 gap-3'>
          <h5 className='p-2 fs-3'>Log Entries Review</h5>
          <div className='flex gap-2'>

          </div>
        </div>
        <div>
          <table className='table mt-4 p-3'>
            <thead>
              <tr>
                <th scope="col">Matric Number</th>
                <th scope="col">Week</th>
                <th scope="col">Log Date</th>
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
                <td>
                  <button>...</button>
                </td>

              </tr>

              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>

                <td>
                  <button>...</button>
                </td>

              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>

                <td>
                  <button>...</button>
                </td>


              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>
                  <button>...</button>
                </td>

              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>

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
              </tr>              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>6</td> */}
                <td>
                  <button>...</button>
                </td>
              </tr>                         <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>6</td> */}
                <td>
                  <button>...</button>
                </td>
              </tr>              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>6</td> */}
                <td>
                  <button>...</button>
                </td>
              </tr>              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                {/* <td>6</td> */}
                <td>
                  <button>...</button>
                </td>
              </tr>              <tr>
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

export default LogEntries