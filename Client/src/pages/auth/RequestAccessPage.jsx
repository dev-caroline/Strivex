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
                            <p className='mt-4'>School Name</p>
                            <input type="text" className='form-control' />
                            <p className='mt-4'>Admin Full Name</p>
                            <input type="text" className='form-control' />
                            <p className='mt-4'>School Address</p>
                            <input type="text" className='form-control' />
                            <p className='mt-4'>Number of Students Eligible for SIWES</p>
                            <input type="number" className='form-control' />
                        </div>

                        <div className='col-6'>
                            <p className='mt-4'>School Email</p>
                            <input type="email" className='form-control' />
                            <p className='mt-4'>Admin Email</p>
                            <input type="email" className='form-control' />
                            <p className='mt-4'>Contact (Phone Number)</p>
                            <input type="number" className='form-control' />
                        </div>
                    </div>
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