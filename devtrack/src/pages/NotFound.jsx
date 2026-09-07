import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found">
      <span className="not-found__code">404</span>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="not-found__link">← Back to Dashboard</Link>
    </div>
  )
}
