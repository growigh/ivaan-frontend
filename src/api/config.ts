'use server'
import axios from 'axios'



// Retool API configuration
export const retoolApi = axios.create({
  baseURL: 'https://api.retool.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000 // 10 seconds timeout
})

// Add request interceptor for logging
retoolApi.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`)
    return config
  },
  (error) => {
    console.error('Request error:', error)
    return Promise.reject(error)
  }
)

// Add response interceptor for error handling
retoolApi.interceptors.response.use(
  (response) => {
    console.log('Response received:', response.status)
    return response
  },
  (error) => {
    console.error('Response error:', error.response?.status, error.message)
    return Promise.reject(error)
  }
)
