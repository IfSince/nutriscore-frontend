import { ReactNode } from 'react';
import { ApiErrorResponse } from '../api/api-slice.ts';
import { ApiErrorMessage } from './messages/api-error-message.tsx';

interface HeaderProps {
    title?: string
    backButton?: ReactNode
    additional?: ReactNode
    apiErrorResponse?: ApiErrorResponse
}

export const Header = ({ title, backButton, additional, apiErrorResponse }: HeaderProps) =>
    <>
        {
            backButton
        }
        <header className="mb-8 lg:mb-10 flex w-full flex-col sm:flex-row">
            { title && <h2 className="text-2xl font-bold">{ title }</h2> }
            {
                additional &&
                <div className="flex grow justify-end mt-6 sm:mt-0">
                    <div className="w-full sm:w-auto">
                        { additional }
                    </div>
                </div>
            }
        </header>
        <ApiErrorMessage apiErrorResponse={ apiErrorResponse }/>
    </>

