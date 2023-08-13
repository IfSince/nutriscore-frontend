import { ReactNode } from 'react';
import { ApiErrorResponse } from '../api/api-slice.ts';
import { ApiErrorMessage } from './messages/api-error-message.tsx';

interface HeaderProps {
    title?: string
    backButton?: ReactNode
    additional?: ReactNode
    apiErrorResponse?: ApiErrorResponse
    wrap?: boolean
}

export const Header = ({ title, wrap = true, backButton, additional, apiErrorResponse }: HeaderProps) =>
    <>
        {
            backButton
        }
        <header className={ `mb-8 lg:mb-10 flex w-full ${ wrap ? 'sm:flex-row flex-col' : 'flex-row' }` }>
            { title && <h2 className="flex items-center text-2xl font-bold">{ title }</h2> }
            {
                additional &&
                <div className={ `flex grow justify-end ${ wrap ? 'mt-6 sm:mt-0' : '' }` }>
                    <div className={ `${ wrap ? 'w-full sm:w-auto' : 'w-auto' }` }>
                        { additional }
                    </div>
                </div>
            }
        </header>
        <ApiErrorMessage apiErrorResponse={ apiErrorResponse }/>
    </>

