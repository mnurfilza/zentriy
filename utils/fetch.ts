import axios, { AxiosRequestHeaders, Method } from 'axios';

const axiosApiInstance = axios.create()

export function fetch<T>(
  url: string,
  method: Method,
  body: any,
  header: AxiosRequestHeaders,
): Promise<T> {
  return new Promise(async (resolve, reject) => {
    axiosApiInstance(url, {
      method,
      data: body,
      headers: header,
    })
      .then((res) => resolve(res.data))
      .catch((err) => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.',
        }
        if (!err.response) {
          reject(defaultError)
        } else if (!err.response.data) {
          reject(defaultError)
        } else {
          reject(err.response.data)
        }
      })
  })
}
