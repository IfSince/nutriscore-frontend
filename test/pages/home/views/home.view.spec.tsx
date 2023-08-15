import { describe, it, jest } from '@jest/globals';
import { UserNutritionalMetadata } from '../../../../src/features/user-metadata/models/user-nutritional-metadata';
import { userMetadataApiSlice } from '../../../../src/features/user-metadata/user-metadata-api-slice';
import { HomeView } from '../../../../src/pages/home/views/home.view';
import { render } from '@testing-library/react';
import * as redux from 'react-redux'


jest.mock('react-router-dom')
jest.mock('../../../../src/features/user-metadata/user-metadata-api-slice')
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));
jest.mock('../../../../src/pages/home/components/weekly-overview-panel', () => () => <div></div>)

describe('HomeView', () => {
    it('renders home view with data if request returns valid user nutritional meta data', () => {
        const state = new Date()

        jest.spyOn(redux, 'useSelector').mockReturnValue(state)

        const getNutritionalMetadataByUserIdMock = () => {}
        const userNutritionalMetadata: UserNutritionalMetadata = {
            recordings: {

            },
            recommendedCalorieIntake: 1,
            recommendedProteinIntake: 1,
            recommendedCarbohydratesIntake: 1,
            recommendedFatsIntake: 1,
            recommendedWaterIntake: 1,
            weightRecordings: []
        }
        const returnVal = {
            data: userNutritionalMetadata,
            isSuccess: true,
            isLoading: true,
        }

        // @ts-ignore
        jest.spyOn(userMetadataApiSlice, 'useGetNutritionalMetadataByUserIdQuery').mockReturnValue([getNutritionalMetadataByUserIdMock, returnVal])

        render(<HomeView/>)
    })
})