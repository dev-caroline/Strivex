import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='p-4 flex justify-between border' style={{ backgroundColor: '#0D1821' }} >
      <div className='text-white'>Logo</div>
      <nav className='text-gray-300 flex gap-8'>
        <Link to='#'>
          <span>Service</span>
        </Link>
        <Link to='#'>
          <span>Why Us</span>
        </Link>
        <Link to='#'>
          <span>Learn More</span>
        </Link>
        <Link to='#'>
          <span>FAQs</span>
        </Link>
        <Link to='#'>
          <span>Contact</span>
        </Link>
        <button className='border px-2 py-1 rounded'>Sign In</button>
        <button className='bg-orange-600 px-2 py-1 rounded text-white'>Request Access</button>
      </nav>
    </div>
  )
}

export default Navbar