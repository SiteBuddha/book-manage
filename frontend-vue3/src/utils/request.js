import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
})

service.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = 'Bearer '
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

service.interceptors.response.use((response) => {
  const { success, message, data } = response.data
  if (success) {
    return data
  } else {
    return Promise.reject(new Error(message || 'Error'))
  }
}, (error) => {
  return Promise.reject(error || 'error')
})
