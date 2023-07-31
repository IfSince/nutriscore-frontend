import { useEffect, useState } from 'react';
import { ApiErrorResponse } from '../../api/api-slice.ts';
import { getApiError } from '../../api/error/api-error-utils.ts';

export const ApiErrorMessage = ({ apiErrorResponse }: { apiErrorResponse: ApiErrorResponse }) => {
    const apiError = getApiError(apiErrorResponse)
    const [visible, setVisible] = useState(true)

    useEffect(() => setVisible(true), [apiErrorResponse])

    return (
        visible && apiError &&
        <div className="flex items-center p-4 mb-4 text-error-800 rounded-lg bg-error/40 border-2 border-error/50">
            <div className="ml-3 text-sm md:text-base font-medium">{ apiError.data.message }</div>
            <button onClick={ () => setVisible(false) }
                    type="button"
                    className="ml-auto -mx-1.5 -my-1.5 bg-error/10 text-error-800 rounded-lg inline-flex items-center justify-center h-8 w-8 p-1.5
                                           focus:ring-2 focus:ring-error hover:bg-error/50">
                <span className="material-icons-round">close</span>
            </button>
        </div>
    )
}