// Realistic seed data for DevTrack

export const seedProjects = [
  {
    id: 'proj-1',
    name: 'Nimbus API Gateway',
    description:
      'Centralized API gateway handling auth, rate limiting, and request routing for all microservices.',
    status: 'active',
    priority: 'high',
    progress: 72,
    techStack: ['Node.js', 'Express', 'Redis', 'Docker'],
    dueDate: '2026-10-15',
    createdAt: '2026-06-02',
  },
  {
    id: 'proj-2',
    name: 'Orbit Design System',
    description:
      'Shared component library and design tokens used across all internal web products.',
    status: 'active',
    priority: 'medium',
    progress: 58,
    techStack: ['React', 'TypeScript', 'Storybook', 'Vite'],
    dueDate: '2026-09-30',
    createdAt: '2026-05-18',
  },
  {
    id: 'proj-3',
    name: 'Pulse Analytics Dashboard',
    description:
      'Real-time analytics dashboard for tracking user engagement and product metrics.',
    status: 'active',
    priority: 'high',
    progress: 41,
    techStack: ['React', 'D3.js', 'WebSocket', 'PostgreSQL'],
    dueDate: '2026-11-05',
    createdAt: '2026-07-10',
  },
  {
    id: 'proj-4',
    name: 'Aster Mobile Sync',
    description:
      'Offline-first sync engine enabling the mobile app to work seamlessly without connectivity.',
    status: 'on-hold',
    priority: 'medium',
    progress: 25,
    techStack: ['React Native', 'SQLite', 'GraphQL'],
    dueDate: '2026-12-01',
    createdAt: '2026-04-22',
  },
  {
    id: 'proj-5',
    name: 'Beacon Notification Service',
    description:
      'Multi-channel notification service supporting email, push, and in-app alerts.',
    status: 'completed',
    priority: 'low',
    progress: 100,
    techStack: ['Go', 'RabbitMQ', 'AWS SES'],
    dueDate: '2026-08-01',
    createdAt: '2026-03-05',
  },
  {
    id: 'proj-6',
    name: 'Vertex Auth Migration',
    description:
      'Migrating legacy session-based auth to OAuth2 + JWT with refresh token rotation.',
    status: 'active',
    priority: 'high',
    progress: 89,
    techStack: ['TypeScript', 'Passport.js', 'PostgreSQL'],
    dueDate: '2026-09-20',
    createdAt: '2026-06-28',
  },
]

let taskId = 1
const t = (projectId, title, status, priority, dueDate, description) => ({
  id: `task-${taskId++}`,
  projectId,
  title,
  description,
  status,
  priority,
  dueDate,
  createdAt: '2026-07-01',
})

export const seedTasks = [
  t('proj-1', 'Implement token-bucket rate limiter', 'completed', 'high', '2026-08-10', 'Add per-client rate limiting using Redis-backed token buckets.'),
  t('proj-1', 'Add circuit breaker for downstream services', 'in-progress', 'high', '2026-09-08', 'Prevent cascading failures when a service is unhealthy.'),
  t('proj-1', 'Write integration tests for routing layer', 'in-progress', 'medium', '2026-09-12', 'Cover edge cases in path matching and header forwarding.'),
  t('proj-1', 'Document gateway configuration schema', 'todo', 'low', '2026-09-25', 'Publish reference docs for the YAML config format.'),

  t('proj-2', 'Finalize color token naming convention', 'completed', 'medium', '2026-07-20', 'Align semantic token names across light/dark themes.'),
  t('proj-2', 'Build Button and Badge components', 'completed', 'high', '2026-08-01', 'Cover all variants, sizes, and states.'),
  t('proj-2', 'Add Storybook accessibility addon', 'in-progress', 'medium', '2026-09-10', 'Automate contrast and ARIA checks in CI.'),
  t('proj-2', 'Publish v2.0 to internal registry', 'todo', 'high', '2026-09-28', 'Coordinate breaking-change migration guide.'),

  t('proj-3', 'Design real-time chart component', 'in-progress', 'high', '2026-09-18', 'Streaming line chart with WebSocket data source.'),
  t('proj-3', 'Set up PostgreSQL materialized views', 'todo', 'medium', '2026-09-22', 'Pre-aggregate daily metrics for faster queries.'),
  t('proj-3', 'Build dashboard filter panel', 'todo', 'medium', '2026-10-01', 'Date range, segment, and event-type filters.'),
  t('proj-3', 'Spike: WebSocket reconnection strategy', 'completed', 'low', '2026-08-15', 'Evaluate exponential backoff approach.'),

  t('proj-4', 'Define conflict resolution strategy', 'todo', 'high', '2026-10-05', 'Last-write-wins vs. CRDT evaluation.'),
  t('proj-4', 'Prototype SQLite schema for offline queue', 'in-progress', 'medium', '2026-09-30', 'Local mutation queue with sync status flags.'),

  t('proj-5', 'Add push notification channel', 'completed', 'medium', '2026-07-18', 'Integrate FCM for Android and APNs for iOS.'),
  t('proj-5', 'Load test notification throughput', 'completed', 'low', '2026-07-25', 'Validate 10k messages/min sustained throughput.'),

  t('proj-6', 'Implement refresh token rotation', 'completed', 'high', '2026-08-20', 'Rotate refresh tokens on every use, detect reuse.'),
  t('proj-6', 'Migrate session store to JWT claims', 'in-progress', 'high', '2026-09-14', 'Remove server-side session lookups on hot path.'),
  t('proj-6', 'Add rollback plan for auth cutover', 'todo', 'high', '2026-09-18', 'Document feature flag rollback procedure.'),
]

export const activityFeed = [
  { id: 'act-1', type: 'task_completed', actor: 'You', target: 'Implement refresh token rotation', time: '2 hours ago' },
  { id: 'act-2', type: 'project_updated', actor: 'You', target: 'Nimbus API Gateway', time: '5 hours ago' },
  { id: 'act-3', type: 'task_created', actor: 'You', target: 'Add rollback plan for auth cutover', time: 'Yesterday' },
  { id: 'act-4', type: 'project_completed', actor: 'You', target: 'Beacon Notification Service', time: '3 days ago' },
  { id: 'act-5', type: 'task_completed', actor: 'You', target: 'Build Button and Badge components', time: '4 days ago' },
]
