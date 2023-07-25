import { apiSlice, USER_TAG } from '../../api/api-slice.ts';
import { User } from '../../redux/models/user.ts';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getUserById: builder.query<User, number>({
                query: userId => `users/${userId}`,
                providesTags: (_result, _error, arg) => [{ type: USER_TAG, id: arg }],
            }),
        }
    ),
})

export const {
    useGetUserByIdQuery,
} = userApiSlice
