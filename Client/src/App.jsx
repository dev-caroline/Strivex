import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import StudentLayout from './layouts/StudentLayout'
import SupervisorLayout from './layouts/SupervisorLayout'
import SchoolAdmin from './layouts/SchoolAdmin'
import SigninPage from './pages/auth/SigninPage'
import RequestAccessPage from './pages/auth/RequestAccessPage'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element = {<SigninPage/>} />
      <Route path='/requestAccess' element = {<RequestAccessPage/>} />
      <Route path='/admin01' element = {<AdminLayout/>} />
      <Route path='/student' element = {<StudentLayout/>} />
      <Route path='/supervisor' element = {<SupervisorLayout/>} />
      <Route path='/schooladmin' element ={<SchoolAdmin/>} />
    </Routes>
    </>
  )
}

export default App