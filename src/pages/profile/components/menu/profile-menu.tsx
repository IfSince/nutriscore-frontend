import { ProfileMenuItem } from './profile-menu-item.tsx';
import {
    LOGIN_ROUTE,
    PROFILE_ADD_WEIGHT_RECORDING_ROUTE,
    PROFILE_ALLERGENICS_ROUTE,
    PROFILE_MEAL_SEARCH_ROUTE,
    PROFILE_NUTRITIONAL_DATA_ROUTE,
    PROFILE_PERSONAL_DATA_ROUTE,
    PROFILE_ROUTE,
} from '../../../../routes.ts';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks.ts';
import { addSuccessMessage } from '../../../../common/messages/global-message-slice.ts';
import { useDeleteUserMutation } from '../../../../features/user/user-api-slice.ts';
import { UserIdContext } from '../../../root.view.tsx';
import { useContext, useEffect } from 'react';
import { CustomSpinner } from '../../../../common/spinner/components/custom-spinner.tsx';
import { ApiErrorMessage } from '../../../../common/messages/api-error-message.tsx';

export const ProfileMenu = ({ opened, toggleOpened }: { opened: boolean, toggleOpened: (value: boolean) => void }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const userId = useContext(UserIdContext)
    const [deleteUser, { isLoading, isSuccess, error }] = useDeleteUserMutation()

    const logout = () => {
        dispatch(addSuccessMessage('You\'ve signed out successfully!'))
        navigate(LOGIN_ROUTE)
        localStorage.removeItem('userId')
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(addSuccessMessage('You\'re account was deleted successfully!'))
            navigate(LOGIN_ROUTE)
            localStorage.removeItem('userId')
        }
    }, [dispatch, isSuccess, navigate]);

    return (
        <div className={ `h-screen w-screen fixed left-0 top-0 bg-cyan-50 z-9000 transition-transform duration-500 overflow-hidden
                          ${ !opened && '-translate-x-full' }` }>
            <div className="absolute top-0 right-0 aspect-square h-56 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-200/30"></div>
            <div className="absolute top-0 right-0 aspect-square h-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-200/10"></div>

            <div className="flex h-full flex-col justify-between px-4 py-14">
                <div></div>
                <ul className="flex flex-col text-xl font-medium">
                    <ProfileMenuItem link={ PROFILE_ROUTE } description="Your Profile" toggleOpened={ toggleOpened }/>
                    <ProfileMenuItem link={ PROFILE_PERSONAL_DATA_ROUTE } description="Personal Data" toggleOpened={ toggleOpened }/>
                    <ProfileMenuItem link={ PROFILE_NUTRITIONAL_DATA_ROUTE } description="Nutritional Data" toggleOpened={ toggleOpened }/>
                    <ProfileMenuItem link={ PROFILE_ALLERGENICS_ROUTE } description="Allergies" toggleOpened={ toggleOpened }/>
                    <ProfileMenuItem link={ PROFILE_MEAL_SEARCH_ROUTE } description="Meals" toggleOpened={ toggleOpened }/>
                    <ProfileMenuItem link={ PROFILE_ADD_WEIGHT_RECORDING_ROUTE } description="New Weight recording" toggleOpened={ toggleOpened }/>
                </ul>
                <ul className="flex flex-col text-xl font-medium">
                    <li>
                        <button className="flex items-center py-2 pr-6 hover:font-bold" onClick={ logout }>
                            <span className="mr-2 material-icons-round">logout</span> Sign out
                        </button>
                    </li>
                    <li>
                        <ApiErrorMessage apiErrorResponse={ error }/>
                        <button className="flex items-center py-2 pr-6 text-error hover:font-bold disabled:text-error/50"
                                onClick={ () => deleteUser(userId) }
                                disabled={ isLoading }>
                            <span className="mr-2 material-icons-round">delete</span>
                            <span className="mr-4">Delete Account</span>
                            { isLoading && <CustomSpinner size="sm" fill="fill-error" backgroundClr="text-error/30"/> }
                        </button>
                    </li>
                </ul>
            </div>

        </div>
    )
}