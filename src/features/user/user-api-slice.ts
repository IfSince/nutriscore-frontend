import { apiSlice, USER_METADATA_TAG, USER_TAG } from '../../api/api-slice.ts';
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
                invalidatesTags: (_result, _error, { id }) => [
                    { type: USER_TAG, id },
                    { type: USER_METADATA_TAG, id: id },
                ],
            }),
            deleteUser: builder.mutation<void, number>({
                query: id => (
                    {
                        url: `users/${ id }`,
                        method: 'DELETE',
                    }
                ),
            }),
        }
    ),
})

export const {
    useGetUserByIdQuery,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = userApiSlice
