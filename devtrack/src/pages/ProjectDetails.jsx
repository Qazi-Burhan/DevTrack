import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout.jsx'
import ProgressBar from '../components/ui/ProgressBar.jsx'
import { StatusBadge, PriorityBadge, TechTag } from '../components/ui/Badge.jsx'
import Button from '../components/ui/Button.jsx'
import { useAppState } from '../context/AppContext.jsx'
import './ProjectDetails.css'

const TASK_STATUS_LABEL = { todo: 'To Do', 'in-progress': 'In Progress', completed: 'Completed' }

export default function ProjectDetails() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const { projects, tasks, activity } = useAppState()

  const project = projects.find((p) => p.id === projectId)
  const projectTasks = tasks.filter((t) => t.projectId === projectId)
  const relatedActivity = activity.slice(0, 4)

  if (!project) {
    return (
      <AppLayout title="Project not found">
        <div className="empty-state">
          <span className="empty-state__icon">◧</span>
          <span className="empty-state__title">We couldn't find that project</span>
          <Button variant="secondary" onClick={() => navigate('/projects')}>Back to Projects</Button>
        </div>
      </AppLayout>
    )
  }

  const completedCount = projectTasks.filter((t) => t.status === 'completed').length

  return (
    <AppLayout title={project.name} subtitle="Project overview">
      <Link to="/projects" className="back-link">← Back to Projects</Link>

      <section className="pd-hero panel">
        <div className="pd-hero__top">
          <div>
            <h2 className="pd-hero__name">{project.name}</h2>
            <p className="pd-hero__desc">{project.description}</p>
          </div>
          <div className="pd-hero__badges">
            <StatusBadge status={project.status} />
            <PriorityBadge priority={project.priority} />
          </div>
        </div>

        <div className="pd-hero__progress">
          <div className="pd-hero__progress-label">
            <span>Overall Progress</span>
            <span>{project.progress}%</span>
          </div>
          <ProgressBar value={project.progress} size="lg" />
        </div>

        <div className="pd-hero__tags">
          {project.techStack.map((t) => <TechTag key={t}>{t}</TechTag>)}
        </div>

        <div className="pd-hero__meta-grid">
          <div>
            <span className="pd-hero__meta-label">Due Date</span>
            <span className="pd-hero__meta-value">{formatDate(project.dueDate)}</span>
          </div>
          <div>
            <span className="pd-hero__meta-label">Created</span>
            <span className="pd-hero__meta-value">{formatDate(project.createdAt)}</span>
          </div>
          <div>
            <span className="pd-hero__meta-label">Tasks</span>
            <span className="pd-hero__meta-value">{completedCount}/{projectTasks.length} done</span>
          </div>
        </div>
      </section>

      <div className="pd-grid">
        <section className="panel">
          <div className="panel__header">
            <h3>Tasks</h3>
            <Link to="/tasks" className="panel__link">Manage all tasks</Link>
          </div>
          {projectTasks.length === 0 ? (
            <div className="empty-state">
              <span className="empty-state__title">No tasks yet for this project</span>
            </div>
          ) : (
            <ul className="pd-task-list">
              {projectTasks.map((t) => (
                <li className="pd-task-row" key={t.id}>
                  <span className={`pd-task-row__status pd-task-row__status--${t.status}`} aria-hidden="true" />
                  <div className="pd-task-row__main">
                    <span className="pd-task-row__title">{t.title}</span>
                    <span className="pd-task-row__desc">{t.description}</span>
                  </div>
                  <span className="pd-task-row__badge-group">
                    <PriorityBadge priority={t.priority} />
                    <span className="pd-task-row__due">Due {formatDate(t.dueDate)}</span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <div className="pd-side">
          <section className="panel">
            <div className="panel__header">
              <h3>Timeline</h3>
            </div>
            <ol className="pd-timeline">
              <li className="pd-timeline__item pd-timeline__item--done">
                <span className="pd-timeline__dot" />
                <div>
                  <p>Project created</p>
                  <span>{formatDate(project.createdAt)}</span>
                </div>
              </li>
              <li className={`pd-timeline__item ${project.progress > 0 ? 'pd-timeline__item--done' : ''}`}>
                <span className="pd-timeline__dot" />
                <div>
                  <p>Development in progress</p>
                  <span>{project.progress}% complete</span>
                </div>
              </li>
              <li className={`pd-timeline__item ${project.status === 'completed' ? 'pd-timeline__item--done' : ''}`}>
                <span className="pd-timeline__dot" />
                <div>
                  <p>Target completion</p>
                  <span>{formatDate(project.dueDate)}</span>
                </div>
              </li>
            </ol>
          </section>

          <section className="panel">
            <div className="panel__header">
              <h3>Recent Activity</h3>
            </div>
            <ul className="pd-activity-list">
              {relatedActivity.map((a) => (
                <li key={a.id}>
                  <span className="pd-activity-list__dot" />
                  <div>
                    <p>{a.target}</p>
                    <span>{a.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </AppLayout>
  )
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
