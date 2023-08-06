import { apiSlice, USER_TAG } from '../../api/api-slice.ts';
import { User } from './models/user.ts';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getUserById: builder.query<User, number>({
                query: userId => `users/${ userId }`,
                providesTags: (_result, _error, arg) => [{ type: USER_TAG, id: arg }],
            }),
            updateUser: builder.mutation<User, User>({
                query: user => (
                    {
                        url: `users/${ user.id }`,
                        method: 'PUT',
                        body: user,
                    }
                ),
                invalidatesTags: (_result, _error, { id }) => [{ type: USER_TAG, id }],
            }),
        }
    ),
})

export const {
    useGetUserByIdQuery,
    useUpdateUserMutation,
} = userApiSlice
