import React from 'react'

const Students = () => {
  return (
    <div className='p-4'>
      <div className="flex gap-3 mt-3">
        <input type="text" placeholder="Search student..." className="border rounded p-2 flex-1" />
        <select className="border rounded p-2">
          <option>CSC</option>
          <option>INS</option>
          <option>CYB</option>
        </select>
        <select className="border rounded p-2">
          <option>Eligible</option>
          <option>Not Eligible</option>
        </select>
        <select className="border rounded p-2">
          <option>Prof. Adeyemo</option>
          <option>Prof. Olabiyisi</option>
          <option>Prof. Adeosun</option>
        </select>
      </div>

            <div className="flex justify-end mt-4">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
          + Add Student
        </button>
        {/* <button className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
          Delete all
        </button> */}
      </div>

      <div className='border mt-5 p-4 overflow-auto scroll-auto' style={{ height: '68vh' }} >
        <div className='flex justify-between p-1 gap-3'>
          <h5 className='p-2 fs-3'>All Students Eligible for SIWES </h5>
          <div className='flex gap-2'>

          </div>
        </div>
        <div>
          <table className='table mt-4 p-3'>
            <thead>
              <th>Full name</th>
              <th>Matric Number</th>
              <th>Department</th>
              <th>Email</th>
              <th>SIWES Status</th>
              <th>Supervisor</th>

            </thead>
            <tbody>
              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>

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
                <th>7</th>
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
                <th>7</th>
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
                <th>7</th>
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
                <th>7</th>
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
                <th>7</th>
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
                <th>7</th>
                <th>
                  <button>...</button>
                </th>
              </tr>              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>
                  <button>...</button>
                </th>
              </tr>              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>
                  <button>...</button>
                </th>
              </tr>              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>
                  <button>...</button>
                </th>
              </tr>              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>
                  <button>...</button>
                </th>
              </tr>              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>
                  <button>...</button>
                </th>
              </tr>              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>
                  <button>...</button>
                </th>
              </tr>              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>
                  <button>...</button>
                </th>
              </tr>              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>
                  <button>...</button>
                </th>
              </tr>              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>
                  <button>...</button>
                </th>
              </tr>              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>
                  <button>...</button>
                </th>
              </tr>              <tr>
                <th>3</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
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

export default Students