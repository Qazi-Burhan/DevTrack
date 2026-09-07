import React from 'react'
import './ui.css'

export default function ProgressBar({ value, size = 'md', showLabel = false }) {
  const clamped = Math.max(0, Math.min(100, value))
  let tone = 'accent'
  if (clamped === 100) tone = 'success'
  else if (clamped < 30) tone = 'danger'
  else if (clamped < 60) tone = 'warning'

  return (
    <div className={`progress progress--${size}`}>
      <div
        className="progress__track"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`progress__fill progress__fill--${tone}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && <span className="progress__label">{clamped}%</span>}
    </div>
  )
}
