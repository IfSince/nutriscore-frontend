import { describe, expect, it } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import { ApiErrorMessage } from '../../../src/common/messages/api-error-message';
import { ApiErrorResponse } from '../../../src/api/api-slice';

describe('ApiErrorMessage', () => {
    const message = 'Hello world'

    it('displays error message if apiError is defined includes message', () => {
        const apiErrorResponse: ApiErrorResponse = {
            status: 404,
            data: { message },
        }

        const { queryByText } = render(<ApiErrorMessage apiErrorResponse={ apiErrorResponse }/>)
        expect(queryByText(`${ apiErrorResponse.status } - ${ message }`)).toBeTruthy()
    })

    it('is not rendered anymore if button pressed', () => {
        const apiErrorResponse: ApiErrorResponse = {
            status: 404,
            data: { message },
        }

        const { getByRole, queryByText } = render(<ApiErrorMessage apiErrorResponse={ apiErrorResponse }/>)

        fireEvent.click(getByRole('button'))

        expect(queryByText(message)).toBeFalsy()
    })

    it('is not rendered if apiErrorResponse is undefined', () => {
        const apiErrorResponse: ApiErrorResponse = undefined

        const { container } = render(<ApiErrorMessage apiErrorResponse={ apiErrorResponse }/>)

        expect(container.innerHTML).toEqual('')
    })

    it('is not rendered if apiErrorResponse does not contain message', () => {
        const apiErrorResponse: ApiErrorResponse = {
            status: 404,
            data: {},
        }

        const { container } = render(<ApiErrorMessage apiErrorResponse={ apiErrorResponse }/>)

        expect(container.innerHTML).toBe('')
    })

    it('is not rendered if apiErrorResponse status is 422', () => {
        const apiErrorResponse: ApiErrorResponse = {
            status: 422,
            data: { message },
        }

        const { container } = render(<ApiErrorMessage apiErrorResponse={ apiErrorResponse }/>)

        expect(container.innerHTML).toBe('')
    })

})