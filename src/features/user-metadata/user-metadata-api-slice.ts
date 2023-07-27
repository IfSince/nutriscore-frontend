import { apiSlice, USER_METADATA_TAG } from '../../api/api-slice.ts';
import { UserNutritionalMetadata } from './models/user-nutritional-metadata.ts';

export const userMetadataApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getNutritionalMetadataByUserId: builder.query<UserNutritionalMetadata, number>({
                query: (id: number) => `users/${ id }/nutritional-metadata`,
                providesTags: (_result, _error, arg) => [{ type: USER_METADATA_TAG, id: arg }],
            }),
        }
    ),
})
export const {
    useGetNutritionalMetadataByUserIdQuery,
} = userMetadataApiSlice