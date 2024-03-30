export const DIRECTION = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
} as const

export type DirectionType = typeof DIRECTION[keyof typeof DIRECTION]