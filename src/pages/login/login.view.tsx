import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks.ts';
import { useLoginMutation } from '../../features/login/login-api-slice.ts';
import { addErrorMessage, addSuccessMessage } from '../../common/messages/global-message-slice.ts';
import { LoginForm } from '../../features/login/components/login-form.tsx';
import { loginAllowed } from '../../utils/login-allowed.ts';

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
            if (loginAllowed(user)) {
                localStorage.setItem('userId', user.id.toString())
                dispatch(addSuccessMessage('Logged in successfully!'))
            } else {
                dispatch(addErrorMessage('You dont have the permission to log in'))
            }
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