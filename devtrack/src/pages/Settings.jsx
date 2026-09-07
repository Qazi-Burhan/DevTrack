import React, { useState } from 'react'
import AppLayout from '../components/layout/AppLayout.jsx'
import Button from '../components/ui/Button.jsx'
import { useAppState, useAppDispatch } from '../context/AppContext.jsx'
import './Settings.css'

const ACCENTS = [
  { key: 'indigo', color: '#6366f1' },
  { key: 'cyan', color: '#06b6d4' },
  { key: 'emerald', color: '#10b981' },
  { key: 'rose', color: '#f43f5e' },
]

export default function Settings() {
  const { settings } = useAppState()
  const dispatch = useAppDispatch()
  const [profile, setProfile] = useState({ name: settings.name, email: settings.email, role: settings.role })
  const [saved, setSaved] = useState(false)

  function handleProfileSave(e) {
    e.preventDefault()
    dispatch({ type: 'UPDATE_SETTINGS', updates: profile })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  function toggleNotification(key) {
    dispatch({
      type: 'UPDATE_NOTIFICATIONS',
      updates: { [key]: !settings.notifications[key] },
    })
  }

  return (
    <AppLayout title="Settings" subtitle="Manage your profile and preferences">
      <div className="settings-grid">
        <section className="panel">
          <div className="panel__header"><h3>Profile</h3></div>
          <form className="settings-form" onSubmit={handleProfileSave}>
            <div className="settings-form__row">
              <label htmlFor="name">Full name</label>
              <div className="input-field">
                <input
                  id="name"
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
              </div>
            </div>
            <div className="settings-form__row">
              <label htmlFor="email">Email address</label>
              <div className="input-field">
                <input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </div>
            </div>
            <div className="settings-form__row">
              <label htmlFor="role">Role</label>
              <div className="input-field">
                <input
                  id="role"
                  type="text"
                  value={profile.role}
                  onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                />
              </div>
            </div>
            <div className="settings-form__actions">
              <Button type="submit" variant="primary">Save changes</Button>
              {saved && <span className="settings-form__saved">Saved ✓</span>}
            </div>
          </form>
        </section>

        <section className="panel">
          <div className="panel__header"><h3>Appearance</h3></div>
          <div className="settings-block">
            <span className="settings-block__label">Accent color</span>
            <div className="accent-row">
              {ACCENTS.map((a) => (
                <button
                  key={a.key}
                  className={`accent-swatch ${settings.accent === a.key ? 'accent-swatch--active' : ''}`}
                  style={{ '--swatch-color': a.color }}
                  onClick={() => dispatch({ type: 'UPDATE_SETTINGS', updates: { accent: a.key } })}
                  aria-pressed={settings.accent === a.key}
                  aria-label={`${a.key} accent color`}
                />
              ))}
            </div>
          </div>
          <div className="settings-block">
            <span className="settings-block__label">Density</span>
            <div className="density-row">
              {['comfortable', 'compact'].map((d) => (
                <button
                  key={d}
                  className={`density-btn ${settings.density === d ? 'density-btn--active' : ''}`}
                  onClick={() => dispatch({ type: 'UPDATE_SETTINGS', updates: { density: d } })}
                  aria-pressed={settings.density === d}
                >
                  {d.charAt(0).toUpperCase() + d.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="panel settings-grid__wide">
          <div className="panel__header"><h3>Notifications</h3></div>
          <div className="notif-list">
            <ToggleRow
              label="Task due reminders"
              desc="Get notified when a task is approaching its due date."
              checked={settings.notifications.taskDue}
              onChange={() => toggleNotification('taskDue')}
            />
            <ToggleRow
              label="Project updates"
              desc="Notify me when project status or progress changes."
              checked={settings.notifications.projectUpdates}
              onChange={() => toggleNotification('projectUpdates')}
            />
            <ToggleRow
              label="Weekly digest"
              desc="A summary of activity across all your projects, every Monday."
              checked={settings.notifications.weeklyDigest}
              onChange={() => toggleNotification('weeklyDigest')}
            />
            <ToggleRow
              label="Mentions"
              desc="Notify me when I'm mentioned in a task or comment."
              checked={settings.notifications.mentions}
              onChange={() => toggleNotification('mentions')}
            />
          </div>
        </section>
      </div>
    </AppLayout>
  )
}

function ToggleRow({ label, desc, checked, onChange }) {
  return (
    <div className="toggle-row">
      <div>
        <p className="toggle-row__label">{label}</p>
        <p className="toggle-row__desc">{desc}</p>
      </div>
      <button
        className={`switch ${checked ? 'switch--on' : ''}`}
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={onChange}
      >
        <span className="switch__thumb" />
      </button>
    </div>
  )
}
