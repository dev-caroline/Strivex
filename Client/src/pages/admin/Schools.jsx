import React, { useState } from 'react'

const Schools = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(null);

  const schools = [
    { name: 'Greenfield High', email: 'info@greenfield.edu', id: 'SCH001', adminEmail: 'admin@greenfield.edu', students: 250, supervisors: 8, status: 'Active' },
    { name: 'Riverside Academy', email: 'contact@riverside.edu', id: 'SCH002', adminEmail: 'principal@riverside.edu', students: 180, supervisors: 6, status: 'Active' },
    { name: 'Mountain View School', email: 'office@mountainview.edu', id: 'SCH003', adminEmail: 'director@mountainview.edu', students: 320, supervisors: 10, status: 'Inactive' },
    { name: 'Valley Prep', email: 'admissions@valleyprep.edu', id: 'SCH004', adminEmail: 'head@valleyprep.edu', students: 150, supervisors: 5, status: 'Active' },
    { name: 'Lakeside Institute', email: 'info@lakeside.edu', id: 'SCH005', adminEmail: 'admin@lakeside.edu', students: 200, supervisors: 7, status: 'Active' },
    { name: 'Summit College', email: 'contact@summit.edu', id: 'SCH006', adminEmail: 'dean@summit.edu', students: 400, supervisors: 12, status: 'Inactive' },
    { name: 'Hillside University', email: 'aeyh@gmail.com', id: 'SCH007', adminEmail: '', students: 0, supervisors: 0, status: 'Inactive' },
    { name: 'Oceanview College', email: 'info@oceanview.edu', id: 'SCH008', adminEmail: 'admin@oceanview.edu', students: 220, supervisors: 9, status: 'Active' },
    { name: 'Cedarwood Academy', email: 'info@cedarwood.edu', id: 'SCH009', adminEmail: 'admin@cedarwood.edu', students: 180, supervisors: 7, status: 'Active' },
    { name: 'Pinehill School', email: 'info@pinehill.edu', id: 'SCH010', adminEmail: 'admin@pinehill.edu', students: 160, supervisors: 6, status: 'Active' },
    { name: 'Greenfield High', email: 'info@greenfield.edu', id: 'SCH011', adminEmail: 'admin@greenfield.edu', students: 250, supervisors: 8, status: 'Active' },
        { name: 'Hillside University', email: 'aeyh@gmail.com', id: 'SCH007', adminEmail: '', students: 0, supervisors: 0, status: 'Inactive' },
    { name: 'Oceanview College', email: 'info@oceanview.edu', id: 'SCH008', adminEmail: 'admin@oceanview.edu', students: 220, supervisors: 9, status: 'Active' },
    { name: 'Cedarwood Academy', email: 'info@cedarwood.edu', id: 'SCH009', adminEmail: 'admin@cedarwood.edu', students: 180, supervisors: 7, status: 'Active' },
    { name: 'Pinehill School', email: 'info@pinehill.edu', id: 'SCH010', adminEmail: 'admin@pinehill.edu', students: 160, supervisors: 6, status: 'Active' },
    { name: 'Greenfield High', email: 'info@greenfield.edu', id: 'SCH011', adminEmail: 'admin@greenfield.edu', students: 250, supervisors: 8, status: 'Active' }
  ];

  const handleEdit = () => {
    console.log('Edit', selectedSchool);
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    console.log('Delete', selectedSchool);
    setIsModalOpen(false);
  };

  return (
    <div className='px-4'>
      <div className='flex justify-between'>
        <div>
          <h1 className='fs-2 mt-4'>School Management</h1>
          <h6>Manage all registered institutions and their administrators.</h6>
        </div>
        <div>
          {/* <button className='p-3  rounded-2 fw-bold fs-6 mt-4  border'>Delete all !</button> */}
          <div className='flex gap-2 mt-5  border-b'>
            <h5 className=' rounded fw-bold'>Total Schools -  </h5>
            <h4 className=' rounded fw-bold'>0</h4>
          </div>
        </div>
      </div>


      <div className="flex gap-3 mt-5">
        <input type="text" placeholder="Search schools..." className="border rounded p-2 flex-1" />
        <select className="border rounded p-2">
          <option>Active</option>
          <option>Not Active</option>
        </select>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
          + Add School
        </button>
        <button className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
          Delete all
        </button>
      </div>
      <div className='border mt-5 p-4 overflow-auto' style={{ height: '58vh' }} >
        <div className='flex justify-between p-1 gap-3'>
          <h5 className='p-2 fs-3'>School Details </h5>
        </div>
        <div>
          <table className='table mt-4 p-3'>
            <thead>
              <tr>
                <th scope="col">School name</th>
                <th scope="col">School email</th>
                <th scope="col">School ID</th>
                <th scope="col">Admin email</th>
                <th scope="col">Total Students</th>
                <th scope="col">Total Supervisor</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {schools.map((school, index) => (
                <tr key={index}>
                  <td>{school.name}</td>
                  <td>{school.email}</td>
                  <td>{school.id}</td>
                  <td>{school.adminEmail}</td>
                  <td>{school.students}</td>
                  <td>{school.supervisors}</td>
                  <td>{school.status}</td>
                  <td>
                    <button onClick={() => { setSelectedSchool(school); setIsModalOpen(true); }} className="text-gray-500 font-bold">...</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Actions Modal */}
      {isModalOpen && selectedSchool && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-64">
            <h3 className="text-lg font-bold mb-4">Actions for {selectedSchool.name}</h3>
            <div className="flex flex-col gap-2">
              <button onClick={handleEdit} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Edit</button>
              <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Delete</button>
              <button onClick={() => setIsModalOpen(false)} className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Schools