import { apiSlice, USER_TAG } from '../../api/api-slice.ts';
import { LoginData } from '../login/models/login-data.ts';
import { User } from '../../redux/models/user.ts';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            login: builder.mutation<User, LoginData>({
                query: loginData => (
                    {
                        url: 'login',
                        method: 'POST',
                        body: loginData,
                    }
                ),
                transformResponse: (rawResult: { data: User }) => rawResult.data,
            }),
            logout: builder.mutation<void, void>({
                query: () => (
                    {
                        url: 'logout',
                        method: 'POST',
                    }
                ),
            }),

            getUserById: builder.query<User, number>({
                query: userId => `users/${userId}`,
                providesTags: (_result, _error, arg) => [{ type: USER_TAG, id: arg }],
            }),
        }
    ),
})

export const {
    useLoginMutation,
    useGetUserByIdQuery,
    useLogoutMutation,
} = userApiSlice
