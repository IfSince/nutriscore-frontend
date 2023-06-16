import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const errorMessage = (error: unknown): string => {
    if (isRouteErrorResponse(error)) {
        return `${ error.status } ${ error.statusText }`
    } else if (error instanceof Error) {
        return error.message
    } else if (typeof error === 'string') {
        return error
    } else {
        return 'Unknown error'
    }
};

export const NotFoundView = () => {
    const error = useRouteError()
    console.error(error);

    return (
        <div>
            <h2>Oops1</h2>
            <p>Sorry, an unexpected error has occured.</p>
            <p>
                <i>{ errorMessage(error) }</i>
            </p>
        </div>
    )
}