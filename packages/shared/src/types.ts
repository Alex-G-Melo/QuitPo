/* ============================================
 * QuitPo Shared Types
 * ============================================ */

// User types
export interface User {
  id: string;
  email: string;
  displayName?: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Streak types
export interface Streak {
  id: string;
  userId: string;
  startDate: Date;
  currentDays: number;
  longestDays: number;
  lastCheckIn?: Date;
}

// Check-in types
export interface CheckIn {
  id: string;
  userId: string;
  date: Date;
  mood: MoodLevel;
  urgeLevel: UrgeLevel;
  notes?: string;
  createdAt: Date;
}

export type MoodLevel = 1 | 2 | 3 | 4 | 5;
export type UrgeLevel = 1 | 2 | 3 | 4 | 5;

// Life Tree stages (gamification)
export type LifeTreeStage =
  | 'seed'
  | 'sprout'
  | 'sapling'
  | 'young-tree'
  | 'mature-tree'
  | 'flourishing'
  | 'ancient'
  | 'nirvana';

export interface LifeTree {
  userId: string;
  stage: LifeTreeStage;
  experience: number;
  level: number;
}

// Achievement types
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

// AI Chat types
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  createdAt: Date;
}

export interface ChatSession {
  id: string;
  userId: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

// Community types
export interface Post {
  id: string;
  userId: string;
  content: string;
  isAnonymous: boolean;
  upvotes: number;
  downvotes: number;
  createdAt: Date;
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  content: string;
  isAnonymous: boolean;
  createdAt: Date;
}

// Subscription types
export type SubscriptionTier = 'free' | 'premium' | 'lifetime';

export interface Subscription {
  userId: string;
  tier: SubscriptionTier;
  expiresAt?: Date;
  isActive: boolean;
}
