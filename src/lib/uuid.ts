import { randomUUID as randomUUIDV4 } from 'crypto'

export type Token = ReturnType<typeof randomUUIDV4>

export const genToken = () => {
  return randomUUIDV4()
}
