import React from 'react'
import { useSelector } from 'react-redux';
import Dashboard from '../pages/Dashboard';
import { Outlet, Navigate } from 'react-router-dom';

const OnlyAdminPrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user)
  return (
    currentUser && currentUser.isAdmin ? <Outlet /> : <Navigate to='sign-in' />
  )
}

export default OnlyAdminPrivateRoute