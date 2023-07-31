import { apiSlice, NUTRITION_TYPE_TAG } from '../../api/api-slice.ts';
import { ActivityLevel } from './models/activity-level.ts';

export const activityLevelApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getAllActivityLevels: builder.query<ActivityLevel[], void>({
                query: () => 'activity-levels',
                providesTags: () => [{ type: NUTRITION_TYPE_TAG, id: 'LIST' }],
            }),
        }
    ),
})

export const { useGetAllActivityLevelsQuery } = activityLevelApiSlice