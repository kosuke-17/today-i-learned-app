'use client'

import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Props = {
  children: ReactNode
}

/**
 * 操作通知のためのProvider
 *
 * @see: https://fkhadra.github.io/react-toastify/api/toast-container
 */
export default function ToastProvider({ children }: Props) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  )
}
