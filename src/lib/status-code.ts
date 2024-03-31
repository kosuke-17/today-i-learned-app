/**
 * Nest.jsのEnumを参照
 * @see : https://github.com/nestjs/nest/blob/master/packages/common/enums/http-status.enum.ts
 */
export const STATUS_CODE = {
  OK: 200,
  SUCCESS: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const

export type StatusCodeType = (typeof STATUS_CODE)[keyof typeof STATUS_CODE]
