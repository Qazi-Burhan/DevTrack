import React from 'react'
import './ui.css'

const STATUS_MAP = {
  active: { label: 'Active', tone: 'info' },
  completed: { label: 'Completed', tone: 'success' },
  'on-hold': { label: 'On Hold', tone: 'warning' },
  todo: { label: 'To Do', tone: 'neutral' },
  'in-progress': { label: 'In Progress', tone: 'info' },
}

const PRIORITY_MAP = {
  high: { label: 'High', tone: 'danger' },
  medium: { label: 'Medium', tone: 'warning' },
  low: { label: 'Low', tone: 'success' },
}

export function StatusBadge({ status }) {
  const cfg = STATUS_MAP[status] || { label: status, tone: 'neutral' }
  return <span className={`badge badge--${cfg.tone}`}>{cfg.label}</span>
}

export function PriorityBadge({ priority }) {
  const cfg = PRIORITY_MAP[priority] || { label: priority, tone: 'neutral' }
  return (
    <span className={`badge badge--${cfg.tone} badge--dot`}>
      <span className="badge__dot" aria-hidden="true" />
      {cfg.label}
    </span>
  )
}

export function TechTag({ children }) {
  return <span className="tech-tag">{children}</span>
}
