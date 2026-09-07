import React from 'react'
import { Link } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout.jsx'
import StatCard from '../components/ui/StatCard.jsx'
import ProgressBar from '../components/ui/ProgressBar.jsx'
import { StatusBadge, PriorityBadge } from '../components/ui/Badge.jsx'
import Button from '../components/ui/Button.jsx'
import { useAppState } from '../context/AppContext.jsx'
import './Dashboard.css'

const ACTIVITY_ICON = {
  task_completed: { icon: '✓', tone: 'success' },
  project_updated: { icon: '↻', tone: 'info' },
  task_created: { icon: '+', tone: 'accent' },
  project_completed: { icon: '★', tone: 'success' },
}

export default function Dashboard() {
  const { projects, tasks, activity, derived, settings } = useAppState()
  const firstName = settings.name.split(' ')[0]

  const recentProjects = [...projects]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4)

  const recentTasks = [...tasks]
    .filter((t) => t.status !== 'completed')
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 5)

  return (
    <AppLayout title="Dashboard" subtitle="Overview of your workspace">
      <section className="welcome-section">
        <div>
          <h2 className="welcome-section__title">Welcome back, {firstName} 👋</h2>
          <p className="welcome-section__text">
            You have {derived.pendingTasks} pending tasks across {derived.activeProjects} active projects.
          </p>
        </div>
        <Button variant="primary" as={Link} to="/projects">
          + New Project
        </Button>
      </section>

      <section className="stat-grid" aria-label="Key statistics">
        <StatCard icon="◧" label="Total Projects" value={derived.totalProjects} tone="accent" />
        <StatCard icon="●" label="Active Projects" value={derived.activeProjects} tone="info" delta={{ positive: true, text: '2 this month' }} />
        <StatCard icon="✓" label="Completed Tasks" value={derived.completedTasks} tone="success" delta={{ positive: true, text: '12%' }} />
        <StatCard icon="◷" label="Pending Tasks" value={derived.pendingTasks} tone="warning" />
      </section>

      <div className="dashboard-grid">
        <section className="panel">
          <div className="panel__header">
            <h3>Project Progress Overview</h3>
            <Link to="/projects" className="panel__link">View all</Link>
          </div>
          <div className="progress-overview-list">
            {projects.filter((p) => p.status !== 'completed').map((p) => (
              <div className="progress-overview-item" key={p.id}>
                <div className="progress-overview-item__top">
                  <Link to={`/projects/${p.id}`} className="progress-overview-item__name">{p.name}</Link>
                  <span className="progress-overview-item__pct">{p.progress}%</span>
                </div>
                <ProgressBar value={p.progress} size="sm" />
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel__header">
            <h3>Activity</h3>
          </div>
          <ul className="activity-list">
            {activity.map((a) => {
              const cfg = ACTIVITY_ICON[a.type] || { icon: '•', tone: 'accent' }
              return (
                <li className="activity-item" key={a.id}>
                  <span className={`activity-item__icon activity-item__icon--${cfg.tone}`}>{cfg.icon}</span>
                  <div className="activity-item__body">
                    <p><strong>{a.actor}</strong> {labelForActivity(a.type)} <strong>{a.target}</strong></p>
                    <span className="activity-item__time">{a.time}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      </div>

      <div className="dashboard-grid dashboard-grid--bottom">
        <section className="panel">
          <div className="panel__header">
            <h3>Recent Projects</h3>
            <Link to="/projects" className="panel__link">View all</Link>
          </div>
          <div className="recent-projects-list">
            {recentProjects.map((p) => (
              <Link to={`/projects/${p.id}`} className="recent-project-row" key={p.id}>
                <div className="recent-project-row__main">
                  <span className="recent-project-row__name">{p.name}</span>
                  <span className="recent-project-row__desc">{p.description}</span>
                </div>
                <StatusBadge status={p.status} />
              </Link>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel__header">
            <h3>Recent Tasks</h3>
            <Link to="/tasks" className="panel__link">View all</Link>
          </div>
          <div className="recent-tasks-list">
            {recentTasks.map((t) => (
              <div className="recent-task-row" key={t.id}>
                <div className="recent-task-row__main">
                  <span className="recent-task-row__title">{t.title}</span>
                  <span className="recent-task-row__due">Due {formatDate(t.dueDate)}</span>
                </div>
                <PriorityBadge priority={t.priority} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  )
}

function labelForActivity(type) {
  switch (type) {
    case 'task_completed': return 'completed'
    case 'project_updated': return 'updated'
    case 'task_created': return 'created'
    case 'project_completed': return 'wrapped up'
    default: return 'touched'
  }
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}
