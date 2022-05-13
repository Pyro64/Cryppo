import React from 'react'
import { Navigate } from 'react-router'

export default function CryppoBusinessLk(props) {
  if (props.isLogin === false) return <Navigate to='entrance' />
  return (
    <div>CryppoBusinessLk</div>
  )
}
