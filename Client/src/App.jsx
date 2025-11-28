import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import StudentLayout from './layouts/StudentLayout'
import SupervisorLayout from './layouts/SupervisorLayout'
import SigninPage from './pages/auth/SigninPage'
import RequestAccessPage from './pages/auth/RequestAccessPage'
import Dashboard from './pages/student/Dashboard'
import LogEntry from './pages/student/LogEntry'
import StudentSettings from './pages/student/StudentSettings'
import Overview from './pages/admin/Overview'
import Schools from './pages/admin/Schools'
import Users from './pages/admin/Users'
import AdminSettings from './pages/admin/AdminSettings'
import AssignedStudentPage from './pages/supervisor/AssignedStudentPage'
import SupervisorDashboard from './pages/supervisor/SupervisorDashboard'
import LogEntries from './pages/supervisor/LogEntries'
import SupervisorSettings from './pages/supervisor/SupervisorSettings'
import WeeklyReport from './pages/supervisor/WeeklyReport'
import SchoolAdminLayout from './layouts/SchoolAdminLayout'
import SchoolAdminOverview from './pages/schoolAdmin/SchoolAdminOverview'
import SchoolAdminSettings from './pages/schoolAdmin/SchoolAdminSettings'
import Students from './pages/schoolAdmin/Students'
import Supervisor from './pages/schoolAdmin/Supervisor'
import SupervisorReport from './pages/schoolAdmin/SupervisorReport'
import Report from './pages/student/Report'



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SigninPage/>} />
        <Route path='/requestAccess' element={<RequestAccessPage />} />


        <Route path='/admin01' element={<AdminLayout />}>
          <Route index element={<Overview />} />
          <Route path='schools' element={<Schools />} />
          <Route path='users' element={<Users />} />
          <Route path='admin-settings' element={<AdminSettings />} />
        </Route>


        <Route path='/student' element={<StudentLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='log-entry' element={<LogEntry />} />
          <Route path='report' element= {<Report/>} />
          <Route path='student-settings' element={<StudentSettings />} />
        </Route>


        <Route path='/supervisor' element={<SupervisorLayout />}>
          <Route index element={<SupervisorDashboard/>} />
          <Route path='assigned-student' element={<AssignedStudentPage/>} />
          <Route path='log-entries' element={<LogEntries/>} /> 
          <Route path='supervisor-settings' element ={<SupervisorSettings/>} />
          <Route path='weekly-report' element={<WeeklyReport/>} />
        </Route>


        <Route path='/school-admin' element={<SchoolAdminLayout/>}>
        <Route index element={<SchoolAdminOverview/>} />
        <Route path='school-admin-settings' element={<SchoolAdminSettings/>} />
        <Route path='students' element ={<Students/>} />
        <Route path='supervisors' element ={<Supervisor/>} />
        <Route path='supervisor-report' element={<SupervisorReport/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App