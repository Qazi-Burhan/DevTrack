import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout.jsx'
import ProgressBar from '../components/ui/ProgressBar.jsx'
import { StatusBadge, PriorityBadge, TechTag } from '../components/ui/Badge.jsx'
import { useAppState } from '../context/AppContext.jsx'
import './Projects.css'

export default function Projects() {
  const { projects, tasks } = useAppState()
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [view, setView] = useState('grid')

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery =
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      const matchesStatus = statusFilter === 'all' || p.status === statusFilter
      return matchesQuery && matchesStatus
    })
  }, [projects, query, statusFilter])

  return (
    <AppLayout title="Projects" subtitle={`${projects.length} total projects`}>
      <div className="page-toolbar">
        <div className="input-field" style={{ flex: 1, maxWidth: 360 }}>
          <span className="input-field__icon" aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Search projects, tech stack..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search projects input"
          />
        </div>

        <select
          className="select-field"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          aria-label="Filter projects by status"
        >
          <option value="all">All statuses</option>
          <option value="active">Active</option>
          <option value="on-hold">On Hold</option>
          <option value="completed">Completed</option>
        </select>

        <div className="view-toggle" role="group" aria-label="View mode toggle">
          <button
            className={`view-toggle__btn ${view === 'grid' ? 'view-toggle__btn--active' : ''}`}
            onClick={() => setView('grid')}
            aria-pressed={view === 'grid'}
            aria-label="Switch to Grid View"
          >
            ▦ Grid
          </button>
          <button
            className={`view-toggle__btn ${view === 'list' ? 'view-toggle__btn--active' : ''}`}
            onClick={() => setView('list')}
            aria-pressed={view === 'list'}
            aria-label="Switch to List View"
          >
            ☰ List
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <span className="empty-state__icon" aria-hidden="true">◧</span>
          <span className="empty-state__title">No projects match your search</span>
          <p>Try adjusting your filters or search term.</p>
        </div>
      ) : (
        <div className={view === 'grid' ? 'project-grid' : 'project-list'}>
          {filtered.map((p, i) => {
            const projectTasks = tasks.filter((t) => t.projectId === p.id)
            return view === 'grid' ? (
              <Link to={`/projects/${p.id}`} className="project-card" key={p.id} style={{ animationDelay: `${i * 40}ms` }}>
                <div className="project-card__top">
                  <h3 className="project-card__name">{p.name}</h3>
                  <StatusBadge status={p.status} />
                </div>
                <p className="project-card__desc">{p.description}</p>
                <div className="project-card__tags">
                  {p.techStack.map((t) => <TechTag key={t}>{t}</TechTag>)}
                </div>
                <div className="project-card__progress">
                  <ProgressBar value={p.progress} showLabel />
                </div>
                <div className="project-card__footer">
                  <PriorityBadge priority={p.priority} />
                  <span className="project-card__meta">{projectTasks.length} tasks</span>
                  <span className="project-card__meta">Due {formatDate(p.dueDate)}</span>
                </div>
              </Link>
            ) : (
              <Link to={`/projects/${p.id}`} className="project-row" key={p.id} style={{ animationDelay: `${i * 30}ms` }}>
                <div className="project-row__main">
                  <span className="project-row__name">{p.name}</span>
                  <span className="project-row__desc">{p.description}</span>
                </div>
                <div className="project-row__tags">
                  {p.techStack.slice(0, 3).map((t) => <TechTag key={t}>{t}</TechTag>)}
                </div>
                <div className="project-row__progress">
                  <ProgressBar value={p.progress} showLabel />
                </div>
                <PriorityBadge priority={p.priority} />
                <StatusBadge status={p.status} />
              </Link>
            )
          })}
        </div>
      )}
    </AppLayout>
  )
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}