import { GenericError, ValidationError } from "./errors"

type PostOptions = Omit<RequestInit, "method">
type GetOptions = Omit<PostOptions, "body">

const request = async <T>(url: string, options: RequestInit): Promise<T> => {
  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      "Content-Type": "application/json"
    }
  }).catch(err => {
    throw new GenericError({ message: err.message });
  })

  const json = await res.json()

  if (!res.ok) {
    if (json.name === "ValidationError") throw new ValidationError(json)
    throw new GenericError(json)
  }

  return json
}

export const get = <T>(url: string, options?: GetOptions): Promise<T> => request(url, { method: "GET", ...options })

export const post = <T>(url: string, options?: PostOptions): Promise<T> => request(url, { method: "POST", ...options })
