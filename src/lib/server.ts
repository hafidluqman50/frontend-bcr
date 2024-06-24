import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { globalNavigate } from './utils'

const httpServer = axios.create({
  baseURL:"https://backend-bcr.fly.dev"
})

httpServer.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token: string = localStorage.getItem('auth_token') || ''
    
    config.headers.Authorization = `Bearer ${token}`
    
    return config
  },
  (error: AxiosError) => {
    Promise.reject(error)
  }
)

httpServer.interceptors.response.use(
  (response: AxiosResponse) => {
    if(response.status == 200 || response.status == 201) {
      return response
    }
    else {
      return Promise.reject({message: 'Error'})
    }
  },
  (error: AxiosError) => {
    if(error.response) {
      if(error.response.status == 403 || error.response.status == 401) {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_name')
        
        globalNavigate('/')
      
      } else {
        throw new AxiosError((error as any))
      }
    } else {
      return Promise.reject(error)
    }
  }
)

export  {
  httpServer 
}