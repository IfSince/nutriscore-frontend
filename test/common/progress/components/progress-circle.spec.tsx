import { ProgressCircle } from '../../../../src/common/progress/components/progress-circle';
import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';


describe('ProgressCircle', () => {
    it('renders children if isLoading is false', () => {
        const valueObject = { value: 0, total: 10 }
        const isLoading = false

        const { queryByText  } = render(
            <ProgressCircle size={ 200 }
                            width={ 15 }
                            valueObject={ valueObject }
                            isLoading={ isLoading }
                            trackStyles="stroke-white"
                            indicatorStyles="stroke-gray-600">
                <span className="fill-gray-600 text-5xl font-bold">{ valueObject.value }</span>
                <span className="text-lg">{ valueObject.total }</span>
            </ProgressCircle>,
        )

        expect(queryByText(valueObject.value)).toBeTruthy()
        expect(queryByText(valueObject.total)).toBeTruthy()
    })

    it('does not render children if isLoading is true', () => {
        const valueObject = { value: 0, total: 10 }
        const isLoading = true

        const { queryByText } = render(
            <ProgressCircle size={ 200 }
                            width={ 15 }
                            valueObject={ valueObject }
                            isLoading={ isLoading }
                            trackStyles="stroke-white"
                            indicatorStyles="stroke-gray-600">
                <span className="fill-gray-600 text-5xl font-bold">{ valueObject.value }</span>
                <span className="text-lg">{ valueObject.total }</span>
            </ProgressCircle>,
        )

        expect(queryByText(valueObject.value)).toBeFalsy()
        expect(queryByText(valueObject.total)).toBeFalsy()
    })
})