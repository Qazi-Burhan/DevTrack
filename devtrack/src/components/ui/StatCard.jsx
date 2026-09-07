import React from 'react'
import './ui.css'

export default function StatCard({ icon, label, value, delta, tone = 'accent' }) {
  return (
    <div className="stat-card">
      <div className={`stat-card__icon stat-card__icon--${tone}`} aria-hidden="true">
        {icon}
      </div>
      <div className="stat-card__body">
        <span className="stat-card__label">{label}</span>
        <div className="stat-card__value-row">
          <span className="stat-card__value">{value}</span>
          {delta && (
            <span className={`stat-card__delta stat-card__delta--${delta.positive ? 'up' : 'down'}`}>
              {delta.positive ? '↑' : '↓'} {delta.text}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
