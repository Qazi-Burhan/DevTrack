import React, { useState } from 'react'
import Sidebar from './Sidebar.jsx'
import Header from './Header.jsx'
import './AppLayout.css'

export default function AppLayout({ title, subtitle, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app-layout">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="app-layout__main">
        <Header title={title} subtitle={subtitle} onMenuClick={() => setSidebarOpen(true)} />
        <main className="app-layout__content">{children}</main>
      </div>
    </div>
  )
}
