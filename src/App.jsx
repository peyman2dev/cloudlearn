import React from 'react'
import { useRoutes } from 'react-router-dom'
import _routes from './Utils/routes/routes'

export default function App() {
  const application = useRoutes(_routes)
  return (  application  )
}
