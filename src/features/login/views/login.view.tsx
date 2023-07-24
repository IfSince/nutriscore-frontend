import { Link, Navigate } from 'react-router-dom';
import { PrimaryButton } from '../../../common/button/components/primary-button.tsx';
import { InputField } from '../../form/components/input-field.tsx';
import { useState } from 'react';
import { useLoginMutation } from '../../user/user-api-slice.ts';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { User } from '../../../redux/models/user.ts';

export const LoginView = () => {
    const [email, setEmail] = useState('test@gmx.de')
    const [password, setPassword] = useState('Password123!')

    const [
        login,
        {
            data,
            isLoading,
            isSuccess,
            error,
        },
    ] = useLoginMutation()

    const loginFn = () => login({ email, password })

    if (isSuccess && data) {
        localStorage.setItem('user', JSON.stringify(data))

        console.log(JSON.parse(localStorage.getItem('user') ?? '') as User)
        return <Navigate to={ '/home' } state={ data }/>
    }

    return (
        <form onSubmit={ loginFn }>
            <div className="flex min-h-screen justify-center lg:min-h-[750px]">
                <div className="mb-10 flex w-full max-w-5xl flex-col justify-between">
                    <div className="flex bg-cyan-200 w-full h-24 rounded-b-6xl relative">
                        <div
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 aspect-square w-20 bg-gray-100 rounded-full flex justify-center items-center">
                            logo
                        </div>
                    </div>
                    <div className="flex flex-col items-center px-5">
                        <h2 className="mb-4 text-center text-3xl font-bold text-gray-600 md:mb-6 lg:mb-16 xl:text-4xl">Welcome Back!</h2>
                        <div className="flex w-full max-w-md flex-col items-center gap-4">
                            <InputField icon="email"
                                        name="email"
                                        value={ email }
                                        placeholder="your@email.com"
                                        onChange={ setEmail }
                                        disabled={ isLoading }
                                        errors={ error?.data?.errors['email'] ?? [] }/>

                            <InputField icon="lock"
                                        name="password"
                                        type="password"
                                        value={ password }
                                        placeholder="••••••••••••"
                                        onChange={ setPassword }
                                        disabled={ isLoading }
                                        errors={ error?.data?.errors['password'] ?? [] }/>
                            <div className="w-full flex justify-end mr-1 ">
                                <Link to={ '' } className="text-right text-cyan-300 transition-colors hover:text-cyan-400 font-medium">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full flex-col items-center justify-center px-5">
                        <PrimaryButton className="w-full max-w-md"
                                       type="submit"
                                       action={ loginFn }
                                       isLoading={ isLoading }>
                        <span className="font-medium whitespace-nowrap text-base">
                            { isLoading ? <CenteredSpinner size="md" backgroundClr="text-gray-50" fill="fill-cyan-200"/> : 'Log in' }
                        </span>
                        </PrimaryButton>
                        <span className="font-medium text-gray-500 mt-6">
                        Dont have an account yet?
                        <Link to={ '/register/goal' } className="ml-1 text-cyan-300 transition-colors hover:text-cyan-400">Sign up</Link>
                    </span>
                    </div>
                </div>
            </div>
        </form>
    )
}