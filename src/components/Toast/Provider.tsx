'use client'

import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Props = {
  children: ReactNode
}

export default function ToastProvider({ children }: Props) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  )
}
