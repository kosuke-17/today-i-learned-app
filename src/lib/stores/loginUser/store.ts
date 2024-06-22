import { create } from 'zustand'

type loginUserStore = {
  loginUser: { name: string }
  setLoginUser: (loginUser: { name: string }) => void
}

export const useLoginUserStore = create<loginUserStore>()((set) => ({
  loginUser: { name: '' },
  setLoginUser: (loginUser: loginUserStore['loginUser']) => set({ loginUser }),
}))
