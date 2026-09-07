import React from 'react'
import './ui.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconOnly = false,
  as: Tag = 'button',
  ...rest
}) {
  return (
    <Tag
      className={`btn btn--${variant} btn--${size} ${iconOnly ? 'btn--icon-only' : ''}`}
      {...rest}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {!iconOnly && children}
    </Tag>
  )
}
