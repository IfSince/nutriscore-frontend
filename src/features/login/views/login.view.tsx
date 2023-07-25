import { Navigate } from 'react-router-dom';
import { LoginForm } from '../components/login-form.tsx';
import { useLoginMutation } from '../login-api-slice.ts';

export const LoginView = () => {
    const [
        login,
        {
            data: user,
            isLoading,
            isSuccess,
            error,
        },
    ] = useLoginMutation()

    if (isSuccess && user) {
        localStorage.setItem('userId', user.id.toString())
        return <Navigate to={ '/home' } state={ user }/>
    }

    return (
        <LoginForm onSubmit={ (loginData) => login({ ...loginData }) }
                   isLoading={ isLoading }
                   apiError={ error }/>
    )
}