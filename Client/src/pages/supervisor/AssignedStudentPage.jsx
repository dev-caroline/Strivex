import React from 'react'

const AssignedStudentPage = () => {
  return (
    <div className='p-4'>
      <div className="flex gap-3 mt-3">
        <input type="text" placeholder="Search student..." className="border rounded p-2 flex-1" />
        <select className="border rounded p-2">
          <option>Week 1</option>
          <option>Week 2</option>
          <option>Week 3</option>
        </select>
        <select className="border rounded p-2">
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
      </div>


      <div className='border mt-5 p-4 overflow-auto scroll-auto' style={{ height: '77vh' }} >
        <div className='flex justify-between p-1 gap-3'>
          <h5 className='p-2 fs-3'>Assigned Students </h5>
          <div className='flex gap-2'>

          </div>
        </div>
        <div>
          <table className='table mt-4 p-3'>
            <thead>
              <tr>
                <th scope="col">Full name</th>
                <th scope="col">Matric Number</th>
                <th scope="col">Department</th>
                <th scope="col">Email</th>
                <th scope="col">SIWES Status</th>
                <th scope="col">Current Week</th>
                <th scope="col">Logs Approved</th>
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
                <td>6</td>
                <td>7</td>

                <td>
                  <button>...</button>
                </td>

              </tr>

              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>6</td>
                <td>7</td>
                <td>
                  <button>...</button>
                </td>

              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>6</td>
                <td>7</td>
                <td>
                  <button>...</button>
                </td>


              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>6</td>
                <td>7</td>
                <td>
                  <button>...</button>
                </td>

              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>6</td>

                <td>7</td>
                <td>
                  <button>...</button>
                </td>

              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>

                <td>6</td>
                <td>7</td>
                <td>
                  <button>...</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>6</td>

                <td>7</td>
                <td>
                  <button>...</button>
                </td>
              </tr>              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>6</td>

                <td>7</td>
                <td>
                  <button>...</button>
                </td>
              </tr>                                  <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>6</td>

                <td>7</td>
                <td>
                  <button>...</button>
                </td>
              </tr>              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>6</td>

                <td>7</td>
                <td>
                  <button>...</button>
                </td>
              </tr>              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>6</td>

                <td>7</td>
                <td>
                  <button>...</button>
                </td>
              </tr>              <tr>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>6</td>

                <td>7</td>
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

export default AssignedStudentPage