import { useEffect, useState } from 'react';
import { ApiErrorResponse } from '../../api/api-slice.ts';
import { getApiError } from '../../api/error/api-error-utils.ts';

export const ApiErrorMessage = ({ apiErrorResponse }: { apiErrorResponse: ApiErrorResponse }) => {
    const apiError = getApiError(apiErrorResponse)
    const [visible, setVisible] = useState(true)

    useEffect(() => setVisible(true), [apiErrorResponse])

    return (
        visible && apiError &&
        <div className="flex items-center p-4 mb-6 text-gray-600 rounded-lg border-error bg-error/30 w-full">
            <span className="sr-only">Info</span>
            <div className="ml-3 text-sm text-error/80 truncate">
                { apiError.data.message }
            </div>
            <button type="button"
                    onClick={ () => setVisible(false) }
                    className="ml-auto -mx-1.5 -my-1.5 text-gray-600 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8">
                <span className="material-icons-round">close</span>
            </button>
        </div>
    )
}