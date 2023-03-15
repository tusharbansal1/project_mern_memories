import React from 'react';
import { Navigate, Outlet, Route, RouteProps, Redirect } from 'react-router-dom';
import { getToken } from './common';

// handle the public routes
const PublicRoutes = () => {
  return !getToken() ? <Outlet /> : <Navigate to="/" />
}
export default PublicRoutes;