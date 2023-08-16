import { apiSlice, PROFILE_METADATA_TAG, USER_METADATA_TAG } from '../../api/api-slice.ts';
import { UserNutritionalMetadata } from './models/user-nutritional-metadata.ts';
import { ProfileMetadata } from './models/profile-metadata.ts';

export const userMetadataApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getNutritionalMetadataByUserId: builder.query<UserNutritionalMetadata, number>({
                query: (id: number) => `users/${ id }/nutritional-metadata`,
                providesTags: (_result, _error, arg) => [{ type: USER_METADATA_TAG, id: arg }],
            }),
            getProfileMetadataByUserId: builder.query<ProfileMetadata, number>({
                query: id => `users/${ id }/profile-metadata`,
                providesTags: (_result, _error, arg) => [{ type: PROFILE_METADATA_TAG, id: arg }],
            }),
        }
    ),
})
export const {
    useGetNutritionalMetadataByUserIdQuery,
    useGetProfileMetadataByUserIdQuery,
} = userMetadataApiSlice