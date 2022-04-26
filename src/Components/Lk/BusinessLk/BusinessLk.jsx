import React from 'react'
import { Navigate } from 'react-router'

export default function CryppoBusinessLk(props) {
  alert(props.isLogin)
  if (props.isLogin === false) return <Navigate to={'/auth'} />
  return (
    <div>CryppoBusinessLk</div>
  )
}
