import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
    const token = { token: 'my-dummy-token' }
    return token.token ? <Outlet/> : <Navigate to={ 'login' }/>
}