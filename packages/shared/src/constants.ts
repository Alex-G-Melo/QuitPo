/* ============================================
 * QuitPo Constants
 * ============================================ */

// Streak milestones
export const STREAK_MILESTONES = [
  { days: 1, label: 'First Step', description: 'You started your journey!' },
  { days: 7, label: 'One Week', description: 'A full week clean!' },
  { days: 14, label: 'Two Weeks', description: 'Halfway to a month!' },
  { days: 30, label: 'One Month', description: 'A full month of progress!' },
  { days: 60, label: 'Two Months', description: 'Incredible dedication!' },
  { days: 90, label: 'Rewired', description: 'Brain rewiring complete!' },
  { days: 180, label: 'Half Year', description: 'Six months of freedom!' },
  { days: 365, label: 'One Year', description: 'A full year clean!' },
] as const;

// Target days for brain rewiring
export const REWIRING_TARGET_DAYS = 90;

// Life Tree stage thresholds (experience points)
export const LIFE_TREE_STAGES = {
  seed: { minXP: 0, maxXP: 99, daysRequired: 0 },
  sprout: { minXP: 100, maxXP: 299, daysRequired: 7 },
  sapling: { minXP: 300, maxXP: 599, daysRequired: 14 },
  'young-tree': { minXP: 600, maxXP: 999, daysRequired: 30 },
  'mature-tree': { minXP: 1000, maxXP: 1499, daysRequired: 60 },
  flourishing: { minXP: 1500, maxXP: 1999, daysRequired: 90 },
  ancient: { minXP: 2000, maxXP: 2999, daysRequired: 180 },
  nirvana: { minXP: 3000, maxXP: Infinity, daysRequired: 365 },
} as const;

// Experience points for actions
export const XP_REWARDS = {
  dailyCheckIn: 10,
  weekStreak: 50,
  monthStreak: 200,
  communityPost: 5,
  helpfulComment: 3,
  completedLesson: 15,
  meditationSession: 8,
} as const;

// Content blocker defaults
export const DEFAULT_BLOCKED_CATEGORIES = [
  'adult',
  'pornography',
  'gambling',
  'malware',
] as const;

// App URLs
export const APP_URLS = {
  web: 'https://app.quitpo.com',
  landing: 'https://quitpo.com',
  api: 'https://api.quitpo.com',
} as const;
