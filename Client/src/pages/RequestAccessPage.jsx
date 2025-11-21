import React from 'react'
import { Link } from 'react-router-dom'


const RequestAccessPage = () => {
  return (
    <div>
      <div>
        <div className='col-6 mx-auto mt-30 shadow p-5 pt-4 rounded-2xl' style={{ minHeight: '60vh' }}>
          <h1 className='fs-3 fw-bold'>Request Access</h1>

          <div className='flex gap-4 mt-4'>

            <div className='col-6'>
              {/* <h1 className='fs-6 fw-bold'>School Information</h1> */}
              <p className='mt-4'>School Name</p>
              <input type="text" className='form-control' />
              <p className='mt-4'>School Email</p>
              <input type="text" className='form-control' />
              <p className='mt-4'>School Address</p>
              <input type="text" className='form-control' />
              <p className='mt-4'>Contact</p>
              <input type="text" className='form-control' />
            </div>

            <div className='col-6'>
              {/* <h1 className='fs-6 fw-bold'>School Admin Info</h1> */}
              <p className='mt-4'>School Name</p>
              <input type="text" className='form-control' />
              <p className='mt-4'>School Email</p>
              <input type="text" className='form-control' />
              <p className='mt-4'>School Address</p>
              <input type="text" className='form-control' />
              <p className='mt-4'>Contact</p>
              <input type="text" className='form-control' />
            </div>
          </div>
          {/* <p className='mt-4'>Full Name</p>
          <input type="text" className='form-control' />
          <p className='mt-3'>Email</p>
          <input type="text" className='form-control' />
          <p className='mt-3'>Role</p>
          <select name="Role" id="" className='form-control' >
            <option value=""></option>
            <option value="" className='fw-bold'>Student</option>
            <option value="" className='fw-bold'>Supervisor</option>
          </select>
          <p className='mt-3'>Password</p>
          <input type="text" className='form-control' /> */}
          <div className='flex'>
            <button className='text-white fs-5 form-control mt-4 fw-bold' style={{ backgroundColor: '#360000' }} >Submit</button>
          </div>
          <h6 className='text-center flex justify-center' style={{ fontSize: '0.8em' }}>Already have an account?
            <Link to='/'>
              <p>login</p>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  )
}

export default RequestAccessPage