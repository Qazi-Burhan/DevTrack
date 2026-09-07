import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const NAV_ITEMS = [
  { to: '/', label: 'Dashboard', icon: '⬚', end: true },
  { to: '/projects', label: 'Projects', icon: '◧' },
  { to: '/tasks', label: 'Tasks', icon: '✓' },
  { to: '/settings', label: 'Settings', icon: '⚙' },
]

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <div className="sidebar-scrim" onClick={onClose} aria-hidden="true" />}
      <aside className={`sidebar ${open ? 'sidebar--open' : ''}`} aria-label="Main navigation">
        <div className="sidebar__brand">
          <div className="sidebar__logo">DT</div>
          <span className="sidebar__brand-name">DevTrack</span>
          
          <p className="text-xs text-gray-400">Developer Workspace</p>
        </div>

        <nav className="sidebar__nav">
          <span className="sidebar__section-label">Workspace</span>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`}
              onClick={onClose}
            >
              <span className="sidebar__link-icon" aria-hidden="true">{item.icon}</span>
              <span className="sidebar__link-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar__footer">
          <div className="sidebar__upsell">
            <span className="sidebar__upsell-title">Sprint 24</span>
            <p className="sidebar__upsell-text">6 days remaining in current sprint cycle.</p>
          </div>
        </div>
      </aside>
    </>
  )
}
