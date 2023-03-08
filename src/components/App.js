import React from 'react'
import { Outlet } from 'react-router-dom'

import './css/style.css'

function App() {
  return (
    <div>

      <Outlet context />

    </div>
  )
}

export default App