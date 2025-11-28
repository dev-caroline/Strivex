import React, { useState } from 'react'

const StudentSettings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    emailReports: false,
    darkMode: false,
    language: 'English'
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSave = () => {
    // Placeholder for save logic
    alert('Settings saved!')
  }

  return (
    <div className='px-4'>
      <div className='flex justify-between'>
        <div>
          <h1 className='fs-2 mt-4'>Portal Settings</h1>
          <h6>Customize your experience in the student portal.</h6>
        </div>
      </div>

      <div className='mt-10 flex justify-center'>
        <div className='bg-white border rounded-lg shadow-md p-6 max-w-2xl w-full'>
          <h2 className="text-xl fw-bold mb-4">Preferences</h2>
          
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
                className="mr-2"
              />
              Enable Notifications
            </label>
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="emailReports"
                checked={settings.emailReports}
                onChange={handleChange}
                className="mr-2"
              />
              Receive Weekly Reports via Email
            </label>
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
                className="mr-2"
              />
              Dark Mode
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-1 fw-bold">Language</label>
            <select
              name="language"
              value={settings.language}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>

          <div className='flex justify-end gap-3'>
            <button
              onClick={handleSave}
              className='text-white px-6 py-2 rounded fw-bold hover:opacity-80 transition'
              style={{ backgroundColor: '#A43C3C' }}
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentSettings
