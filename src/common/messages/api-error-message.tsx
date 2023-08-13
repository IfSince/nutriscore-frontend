import { useEffect, useState } from 'react';
import { ApiErrorResponse } from '../../api/api-slice.ts';
import { getApiError } from '../../api/error/api-error-utils.ts';

export const ApiErrorMessage = ({ apiErrorResponse, hideValidationMessage = true }: { apiErrorResponse: ApiErrorResponse, hideValidationMessage?: boolean }) => {
    const apiError = getApiError(apiErrorResponse)
    const [visible, setVisible] = useState(true)

    useEffect(() => setVisible(true), [apiErrorResponse])

    return (
        visible && apiError && apiError.data.message && (!hideValidationMessage || apiError.status !== 422) &&
        <div className="flex items-center p-4 mb-6 text-error rounded-lg bg-error-100 border border-error">
            <div className="ml-3 text-sm md:text-base font-medium">{ `${ apiError.status !== 422 ? `${ apiError.status } - ` : '' } ${ apiError.data.message }` }</div>
            <button className="ml-auto -mx-1.5 -my-1.5 rounded-lg inline-flex items-center justify-center h-8 w-8 p-1.5 hover:text-error-800 transition-colors"
                    type="button"
                    onClick={ () => setVisible(false) }>
                <span className="material-icons-round">close</span>
            </button>
        </div>
    )
}