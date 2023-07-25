import { Navigate } from 'react-router-dom';
import { HOME_ROUTE } from '../routes.ts';
import { ReactNode } from 'react';

export const NotLoggedInRoute = ({ children }: { children: ReactNode }) => {
    const isLoggedIn = localStorage.getItem('userId')
    return isLoggedIn ? <Navigate to={ HOME_ROUTE }/> : children
}