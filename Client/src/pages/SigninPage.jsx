import React from 'react'
import { Link } from 'react-router-dom'


const SigninPage = () => {
  return (
    <div>
      <div className='col-3 mx-auto mt-40 shadow p-5 rounded-2xl' style={{ height: '60vh' }}>
        <h1 className='fs-3 fw-bold mt-4'>Login</h1>
        <p className='mt-4'>Email Address / Matric Number</p>
        <input type="text" className='form-control' />
        <p className='mt-3'>Password</p>
        <input type="text" className='form-control' />
        <Link to= '#'>
        <p className='text-end  mt-4 text-blue-900'>Forgot Password</p>
        </Link>
        <div className='flex'>
          <button className='text-white fs-5 form-control mt-4 fw-bold' style={{ backgroundColor: '#360000' }} >Login</button>
        </div>
      </div>
    </div>
  )
}

export default SigninPage