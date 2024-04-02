export const COLOR = {
  WHITE: '#FFF',
  // bg-emerald-600
  PRIMAY_MAIN: '#059669',
  // bg-emerald-700
  PRIMAY_DARK: '#047857',
  // bg-emerald-900
  PRIMAY_DEEP_DARK: '#064e3b',
}

export const Z_INDEX = {
  TOOLTIP: 1,
}

export const VARIANT = {
  TEXT: 'text',
  ELEVATE: 'elevate',
  FILL: 'fill',
  OUTLINE: 'outline',
} as const
export type Variant = (typeof VARIANT)[keyof typeof VARIANT]
