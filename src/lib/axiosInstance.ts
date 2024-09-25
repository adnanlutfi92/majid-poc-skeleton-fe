import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: { 'Content-Type': 'application/json' }
})

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('authToken') //contoh
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  function (response) {
    console.log('Response:', response)

    return response
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized, logging out...')
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
