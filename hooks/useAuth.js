import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function useAuth () {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState(null)
  const router = useRouter()
  const setAuthorizationHeader = (token) => {
    axios.defaults.headers.common.Authorization = token
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setToken(token)
      setAuthorizationHeader(token)
      axios.get('/api/auth')
        .then(() => setIsAuthenticated(true))
        .catch(() => {
          setIsAuthenticated(false)
          setToken(null)
          localStorage.removeItem('token')
        })
    }
  }, [])

  const authenticate = async ({ email, password }) => {
    try {
      const { data: { data: { token } } } = await axios.post('/api/auth', { email, password })
      setToken(token)
      localStorage.setItem('token', token)
      setAuthorizationHeader(token)
      setIsAuthenticated(true)
    } catch (err) {
      setIsAuthenticated(false)
      setToken(null)
      localStorage.removeItem('token')
      throw err
    }
  }

  const guard = () => {
    if (!isAuthenticated && !token && !localStorage.getItem('token')) {
      router.replace('/admin')
    }
  }

  return {
    isAuthenticated,
    authenticate,
    token,
    guard
  }
}
