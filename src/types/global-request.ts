export interface GlobalRequest<T> {
  method: string
  url: string
  headers?: Record<string, string>
  body?: T
  params?: Record<string, string>
  query?: Record<string, string>
}
