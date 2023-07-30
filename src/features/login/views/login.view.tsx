import { Navigate } from 'react-router-dom';
import { LoginForm } from '../components/login-form.tsx';
import { useLoginMutation } from '../login-api-slice.ts';
import { useAppDispatch } from '../../../redux/hooks.ts';
import { addSuccessMessage } from '../../messages/global-message-slice.ts';
import { useEffect } from 'react';

export const LoginView = () => {
    const dispatch = useAppDispatch()
    const [
        login,
        {
            data: user,
            isLoading,
            isSuccess,
            error,
        },
    ] = useLoginMutation()

    useEffect(() => {
        if (isSuccess && user) {
            localStorage.setItem('userId', user.id.toString())
            dispatch(addSuccessMessage('Logged in successfully!'))
        }
    }, [dispatch, isSuccess, user])

    if (isSuccess && user) {
        return <Navigate to={ '/home' } state={ user }/>
    }

    return (
        <LoginForm form={ { email: '', password: '' } }
                   onSubmit={ login }
                   isLoading={ isLoading }
                   apiError={ error }/>
    )
}