import { jwtDecode } from 'jwt-decode'
// import { cookies } from 'next/headers'

interface User {
  email: string
  name: string
  url: string
}

export function getUser(): User {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('unauthenticated.')
  }

  const user: User = jwtDecode(token)

  return user
}
