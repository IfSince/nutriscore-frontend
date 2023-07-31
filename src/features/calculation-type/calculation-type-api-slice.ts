import { apiSlice, CALCULATION_TYPE_TAG } from '../../api/api-slice.ts';
import { CalculationType } from './model/calculation-type.ts';

export const calculationTypeApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => (
        {
            getAllCalculationTypes: builder.query<CalculationType[], void>({
                query: () => 'calculation-types',
                providesTags: () => [{ type: CALCULATION_TYPE_TAG, id: 'LIST' }],
            }),
        }
    ),
})

export const { useGetAllCalculationTypesQuery } = calculationTypeApiSlice