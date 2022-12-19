import React from 'react'
import { Outlet } from 'react-router-dom'
import LoginForm from './LoginForm'

function ProtectedRoutes({ sigIn }) {
  return (
    <>
    {sigIn ? <Outlet /> : <LoginForm />}
    </>
  )
}

export default ProtectedRoutes