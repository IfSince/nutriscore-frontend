import { LoginData } from '../models/login-data.ts';
import { Form, Formik } from 'formik';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { InputField } from '../../form/components/input-field/input-field.tsx';
import { CustomLink } from '../../../common/link/CustomLink.tsx';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';
import { object, string } from 'yup';
import { FormProps } from '../../form/models/form-props.ts';
import LogoDark from '/logo_icon_dark.svg'
import { GlobalMessages } from '../../messages/components/global-messages.tsx';

export const LoginForm = ({ form, onSubmit, apiError, isLoading }: FormProps<LoginData>) => {
    const LoginValidationSchema = object().shape({
        email: string()
            .min(2, 'Too short!')
            .max(50, 'Too long')
            .email('Invalid email address'),
        password: string()
            .min(2, 'Too short!')
            .max(50, 'Too long'),
    })

    return (
        <Formik
            initialValues={ form }
            validationSchema={ LoginValidationSchema }
            validateOnChange={ false }
            validateOnBlur={ true }
            onSubmit={ ({ email, password }) => onSubmit({ email, password }) }>
            {
                ({ isValid, handleBlur }) => (
                    <Form className="flex min-h-screen justify-center lg:min-h-[750px]">
                        <div className="mb-10 flex w-full max-w-5xl flex-col justify-between">
                            <div className="relative flex h-24 w-full bg-cyan-200 rounded-b-6xl">
                                <div
                                    className="absolute bottom-0 left-1/2 flex aspect-square w-24 sm:w-28 lg:w-32 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-white">
                                    <img src={ LogoDark } alt="logo" className="w-2/3 pt-2"/>
                                </div>
                            </div>
                            <div className="flex flex-col items-center px-5">
                                <h2 className="text-center text-3xl font-bold text-gray-600 mb-4 md:mb-6 lg:mb-16 xl:text-4xl">Welcome Back!</h2>
                                <div className="flex w-full max-w-md flex-col items-center mt-6">
                                    <GlobalMessages/>
                                    <ApiErrorMessage apiErrorResponse={ apiError }/>
                                    <div className="w-full">
                                        <InputField name="email"
                                                    type="text"
                                                    disabled={ isLoading }
                                                    onBlur={ handleBlur }
                                                    placeholder="your@email.de"
                                                    errors={ apiError }
                                                    icon="email"/>
                                    </div>

                                    <div className="mt-6 md:mt-8 w-full">
                                        <InputField name="password"
                                                    type="password"
                                                    disabled={ isLoading }
                                                    placeholder="••••••••••••"
                                                    onBlur={ handleBlur }
                                                    errors={ apiError }
                                                    icon="lock"/>
                                    </div>
                                    <div className="mr-1 flex w-full justify-end mt-3">
                                        <CustomLink to="/register/goal" text="Forgot password?" className="text-right"/>
                                    </div>
                                </div>

                            </div>
                            <div className="flex w-full flex-col items-center justify-center px-5">
                                <SubmitButton text="Log in" disabled={ !isValid } isSubmitting={ isLoading }/>
                                <span className="mt-6 font-medium text-gray-500">
                                    Dont have an account yet?
                                    <CustomLink to="/register/goal" text="Sign up" className="ml-1"/>
                                </span>
                            </div>
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}