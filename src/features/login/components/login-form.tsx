import { LoginData } from '../models/login-data.ts';
import { Form, Formik } from 'formik';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { CustomLink } from '../../../common/link/CustomLink.tsx';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';
import { object, string } from 'yup';
import LogoDark from '/logo_icon_dark.svg'
import { FormProps } from '../../../common/form/models/form-props.ts';
import { InputField } from '../../../common/form/components/input-field/input-field.tsx';
import { REGISTER_ROUTE } from '../../../routes.ts';

export const LoginForm = ({ form, onSubmit, apiError, isLoading }: FormProps<LoginData>) => {
    const LoginValidationSchema = object().shape({
        email: string().required(),
        password: string().required(),
    })

    return (
        <Formik
            initialValues={ form }
            validationSchema={ LoginValidationSchema }
            validateOnChange={ false }
            validateOnBlur={ true }
            onSubmit={ ({ email, password }) => onSubmit({ email, password }) }>
            {
                ({ isValid }) => (
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
                                    <div className="w-full">
                                        <ApiErrorMessage apiErrorResponse={ apiError }/>
                                    </div>
                                    <div className="w-full">
                                        <InputField name="email"
                                                    type="text"
                                                    disabled={ isLoading }
                                                    placeholder="your@email.de"
                                                    apiError={ apiError }
                                                    icon="email"/>
                                    </div>

                                    <div className="mt-6 md:mt-8 w-full">
                                        <InputField name="password"
                                                    type="password"
                                                    disabled={ isLoading }
                                                    placeholder="••••••••••••"
                                                    apiError={ apiError }
                                                    icon="lock"/>
                                    </div>
                                    <div className="mr-1 flex w-full justify-end mt-3">
                                        <CustomLink to="" text="Forgot password?" className="text-right"/>
                                    </div>
                                </div>

                            </div>
                            <div className="flex w-full flex-col items-center justify-center px-5">
                                <SubmitButton text="Log in" disabled={ !isValid } isSubmitting={ isLoading }/>
                                <span className="mt-6 font-medium text-gray-500">
                                    Dont have an account yet?
                                    <CustomLink to={REGISTER_ROUTE} text="Sign up" className="ml-1"/>
                                </span>
                            </div>
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}