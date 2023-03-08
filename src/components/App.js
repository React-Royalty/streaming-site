import React from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>

      <Outlet context />

    </div>
  )
}

export default App