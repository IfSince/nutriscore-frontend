import { apiSlice } from '../../api/api-slice.ts';
import { RegisterForm } from './models/register-form.ts';

export const registerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            register: builder.mutation<void, RegisterForm>({
                query: registerSubmitData => (
                    {
                        url: 'register',
                        method: 'PUT',
                        body: registerSubmitData,
                    }
                ),
            }),
        }
    ),
})

export const { useRegisterMutation } = registerApiSlice