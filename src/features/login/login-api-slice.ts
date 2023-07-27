import { apiSlice } from '../../api/api-slice.ts';
import { User } from '../../redux/models/user.ts';
import { LoginData } from './models/login-data.ts';

export const loginApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation<User, LoginData>({
            query: loginData => (
                {
                    url: 'login',
                    method: 'POST',
                    body: loginData,
                }
            ),
        }),
        logout: builder.mutation<void, void>({
            query: () => (
                {
                    url: 'logout',
                    method: 'POST',
                }
            ),
        }),
    })
})

export const {
    useLoginMutation,
    useLogoutMutation
} = loginApiSlice