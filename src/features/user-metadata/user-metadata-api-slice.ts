import { apiSlice, USER_METADATA_TAG } from '../../api/api-slice.ts';
import { UserMetadata } from '../../redux/models/user-metadata.ts';

export const userMetadataApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getNutritionalMetadataByUserId: builder.query<UserMetadata, number>({
                query: (id: number) => `user-metadata/${ id }`,
                transformResponse: (rawResult: { data: UserMetadata }) => rawResult.data,
                providesTags: (_result, _error, arg) => [{ type: USER_METADATA_TAG, id: arg }],

            }),
        }
    ),
})
export const {
    useGetNutritionalMetadataByUserIdQuery
} = userMetadataApiSlice