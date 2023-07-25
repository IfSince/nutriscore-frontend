import { Navigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../routes.ts';
import { ReactNode } from 'react';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const isLoggedIn = localStorage.getItem('userId')

    return isLoggedIn ? children : <Navigate to={ LOGIN_ROUTE }/>
}