type PostOptions = Omit<RequestInit, "method">
type GetOptions = Omit<PostOptions, "body">

const request = <T>(url: string, options: RequestInit): Promise<T> =>
  fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      "Content-Type": "application/json"
    }
  })
    .then((res: Response) => res.json())

export const get = <T>(url: string, options: GetOptions): Promise<T> => request(url, { method: "GET", ...options })

export const post = <T>(url: string, options: PostOptions): Promise<T> => request(url, { method: "POST", ...options })
