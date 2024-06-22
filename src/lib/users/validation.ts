import { z } from 'zod'

import { STATUS_CODE } from '@/lib/status-code'

const formSchema = z.object({
  name: z.string().min(1, { message: '1文字以上入力してください' }),
  email: z.string().min(1, { message: '1文字以上入力してください' }),
  password: z.string().min(1, { message: '1文字以上入力してください' }),
})

export const validateFields = (formData: FormData, message: string) => {
  const validatedFields = formSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      isError: true,
      errors: validatedFields.error.flatten().fieldErrors,
      message,
      status: STATUS_CODE.UNPROCESSABLE_ENTITY,
    }
  }

  return {
    isError: false,
    data: validatedFields.data,
    message: '', // TODO: 削除
  }
}
