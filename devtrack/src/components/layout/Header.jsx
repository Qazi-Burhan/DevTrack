import React, { useState } from 'react'
import { useAppState } from '../../context/AppContext.jsx'
import './Header.css'

export default function Header({ title, subtitle, onMenuClick }) {
  const { settings } = useAppState()
  const [query, setQuery] = useState('')
  const initials = settings.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <header className="header">
      <button className="header__menu-btn" onClick={onMenuClick} aria-label="Open navigation menu">
        <span />
        <span />
        <span />
      </button>

      <div className="header__title-block">
        <h1 className="header__title">{title}</h1>
        {subtitle && <p className="header__subtitle">{subtitle}</p>}
      </div>

      <div className="header__search">
        <span className="header__search-icon" aria-hidden="true">⌕</span>
        <input
          type="search"
          placeholder="Search projects, tasks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search"
        />
        <kbd className="header__search-kbd">⌘K</kbd>
      </div>

      <div className="header__actions">
        <button className="header__icon-btn" aria-label="Notifications">
          <span aria-hidden="true">🔔</span>
          <span className="header__notif-dot" aria-hidden="true" />
        </button>
        <div className="header__avatar" title={settings.name}>
          {initials}
        </div>
      </div>
    </header>
  )
}
