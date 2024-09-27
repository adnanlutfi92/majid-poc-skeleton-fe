export interface GlobalResponse<T> {
  status: string
  status_code: number
  message: string
  data: T
  error?: string
}
