import React, { useMemo, useState } from 'react'
import AppLayout from '../components/layout/AppLayout.jsx'
import { PriorityBadge } from '../components/ui/Badge.jsx'
import { useAppState, useAppDispatch } from '../context/AppContext.jsx'
import './Tasks.css'

const COLUMNS = [
  { key: 'todo', label: 'To Do' },
  { key: 'in-progress', label: 'In Progress' },
  { key: 'completed', label: 'Completed' },
]

const NEXT_STATUS = { todo: 'in-progress', 'in-progress': 'completed', completed: 'todo' }
const NEXT_LABEL = { todo: 'Start', 'in-progress': 'Complete', completed: 'Reopen' }

export default function Tasks() {
  const { tasks, projects } = useAppState()
  const dispatch = useAppDispatch()
  const [query, setQuery] = useState('')
  const [priorityFilter, setPriorityFilter] = useState('all')
  const [projectFilter, setProjectFilter] = useState('all')

  const projectMap = useMemo(() => {
    const m = {}
    projects.forEach((p) => (m[p.id] = p))
    return m
  }, [projects])

  const filtered = useMemo(() => {
    return tasks.filter((t) => {
      const matchesQuery = t.title.toLowerCase().includes(query.toLowerCase())
      const matchesPriority = priorityFilter === 'all' || t.priority === priorityFilter
      const matchesProject = projectFilter === 'all' || t.projectId === projectFilter
      return matchesQuery && matchesPriority && matchesProject
    })
  }, [tasks, query, priorityFilter, projectFilter])

  const grouped = useMemo(() => {
    const g = { todo: [], 'in-progress': [], completed: [] }
    filtered.forEach((t) => g[t.status]?.push(t))
    return g
  }, [filtered])

  function advanceTask(task) {
    dispatch({ type: 'UPDATE_TASK_STATUS', taskId: task.id, status: NEXT_STATUS[task.status] })
  }

  return (
    <AppLayout title="Tasks" subtitle={`${tasks.length} total tasks`}>
      <div className="page-toolbar">
        <div className="input-field" style={{ flex: 1, maxWidth: 320 }}>
          <span className="input-field__icon" aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Search tasks..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search tasks"
          />
        </div>
        <select className="select-field" value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)} aria-label="Filter by priority">
          <option value="all">All priorities</option>
          <option value="high">High priority</option>
          <option value="medium">Medium priority</option>
          <option value="low">Low priority</option>
        </select>
        <select className="select-field" value={projectFilter} onChange={(e) => setProjectFilter(e.target.value)} aria-label="Filter by project">
          <option value="all">All projects</option>
          {projects.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
      </div>

      <div className="kanban">
        {COLUMNS.map((col) => (
          <div className="kanban-column" key={col.key}>
            <div className="kanban-column__header">
              <span className={`kanban-column__dot kanban-column__dot--${col.key}`} />
              <h3>{col.label}</h3>
              <span className="kanban-column__count">{grouped[col.key].length}</span>
            </div>

            <div className="kanban-column__list">
              {grouped[col.key].length === 0 ? (
                <p className="kanban-column__empty">No tasks here</p>
              ) : (
                grouped[col.key].map((t) => {
                  const project = projectMap[t.projectId]
                  return (
                    <div className="task-card" key={t.id}>
                      <div className="task-card__top">
                        <span className="task-card__project">{project?.name}</span>
                        <PriorityBadge priority={t.priority} />
                      </div>
                      <h4 className="task-card__title">{t.title}</h4>
                      <p className="task-card__desc">{t.description}</p>
                      <div className="task-card__footer">
                        <span className="task-card__due">Due {formatDate(t.dueDate)}</span>
                        <button className="task-card__action" onClick={() => advanceTask(t)}>
                          {NEXT_LABEL[t.status]} →
                        </button>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  )
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}
