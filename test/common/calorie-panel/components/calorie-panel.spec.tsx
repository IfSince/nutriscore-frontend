import { afterEach, describe, expect, it, jest } from '@jest/globals';
import { render } from '@testing-library/react';
import { CaloriePanel } from '../../../../src/common/calorie-panel/components/calorie-panel';
import { ProgressCircleProps } from '../../../../src/common/progress/components/progress-circle';
import * as CenteredSpinner from '../../../../src/common/spinner/components/centered-spinner.tsx';

const mockProgressCircle = jest.fn()

// @ts-ignore
CenteredSpinner.CenteredSpinner = () => <div>CenteredSpinner</div>

jest.mock('../../../../src/common/progress/components/progress-circle', () => (props: ProgressCircleProps) => mockProgressCircle(props))

describe('CaloriePanel', () => {
    let isLoading: boolean
    const valueObject = { value: 1, total: 1 }

    afterEach(() => {
        expect(mockProgressCircle).toHaveBeenCalledWith(
            expect.objectContaining({ size: 200, width: 15, valueObject, isLoading }),
        )
    })

    it('renders spinner if isLoading is true', () => {
        isLoading = true

        const { queryByText } = render(<CaloriePanel valueObject={ valueObject } isLoading={ isLoading }/>)

        expect(queryByText('CenteredSpinner')).toBeTruthy()
    })

    it('does not render spinner if isLoading is false', () => {
        isLoading = false

        const { queryByText } = render(<CaloriePanel valueObject={ valueObject } isLoading={ isLoading }/>)

        expect(queryByText('CenteredSpinner')).toBeFalsy()
    })
});