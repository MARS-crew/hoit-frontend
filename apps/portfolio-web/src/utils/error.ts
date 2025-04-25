export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export const handleError = (error: unknown) => {
  if (error instanceof ApiError) {
    // API 에러 처리
    return error.message
  }
  if (error instanceof Error) {
    // 일반 에러 처리
    return error.message
  }
  return '알 수 없는 에러가 발생했습니다.'
} 