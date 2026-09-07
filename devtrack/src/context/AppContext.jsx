import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import { seedProjects, seedTasks, activityFeed } from '../data/seedData.js'

const STORAGE_KEY = 'devtrack:v1'

function loadInitialState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (parsed.projects && parsed.tasks) return parsed
    }
  } catch (e) {
    // fall through to seed data
  }
  return {
    projects: seedProjects,
    tasks: seedTasks,
    activity: activityFeed,
    settings: {
      name: 'Syed Qazi Burhan',
      email: 'syed.qazi@devtrack.io',
      role: 'Frontend Engineer',
      theme: 'dark',
      accent: 'indigo',
      density: 'comfortable',
      notifications: {
        taskDue: true,
        projectUpdates: true,
        weeklyDigest: false,
        mentions: true,
      },
    },
  }
}

const AppStateContext = createContext(null)
const AppDispatchContext = createContext(null)

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TASK_STATUS': {
      const tasks = state.tasks.map((t) =>
        t.id === action.taskId ? { ...t, status: action.status } : t
      )
      return { ...state, tasks }
    }
    case 'ADD_TASK': {
      return { ...state, tasks: [action.task, ...state.tasks] }
    }
    case 'DELETE_TASK': {
      return { ...state, tasks: state.tasks.filter((t) => t.id !== action.taskId) }
    }
    case 'UPDATE_PROJECT': {
      const projects = state.projects.map((p) =>
        p.id === action.projectId ? { ...p, ...action.updates } : p
      )
      return { ...state, projects }
    }
    case 'UPDATE_SETTINGS': {
      return { ...state, settings: { ...state.settings, ...action.updates } }
    }
    case 'UPDATE_NOTIFICATIONS': {
      return {
        ...state,
        settings: {
          ...state.settings,
          notifications: { ...state.settings.notifications, ...action.updates },
        },
      }
    }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadInitialState)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (e) {
      // storage may be unavailable — fail silently
    }
  }, [state])

  const derived = useMemo(() => {
    const totalProjects = state.projects.length
    const activeProjects = state.projects.filter((p) => p.status === 'active').length
    const completedTasks = state.tasks.filter((t) => t.status === 'completed').length
    const pendingTasks = state.tasks.filter((t) => t.status !== 'completed').length
    return { totalProjects, activeProjects, completedTasks, pendingTasks }
  }, [state.projects, state.tasks])

  return (
    <AppStateContext.Provider value={{ ...state, derived }}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export function useAppState() {
  const ctx = useContext(AppStateContext)
  if (!ctx) throw new Error('useAppState must be used within AppProvider')
  return ctx
}

export function useAppDispatch() {
  const ctx = useContext(AppDispatchContext)
  if (!ctx) throw new Error('useAppDispatch must be used within AppProvider')
  return ctx
}
