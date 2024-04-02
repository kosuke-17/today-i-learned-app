/**
 * 再エクスポート構文(export from)
 * @see: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/export#%E5%86%8D%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%88_%E9%9B%86%E7%B4%84
 */
import { ClassAttributes, HTMLAttributes } from 'react'
import { ExtraProps } from 'react-markdown'

export { default as Anchor } from './_Anchor'
export { default as Pre } from './_Pre'
export { default as Headings } from './_Headings'
export { default as UnorderedList } from './_UnorderedList'

export type BaseTagProps<T = HTMLElement> = ClassAttributes<T> &
  HTMLAttributes<T> &
  ExtraProps
