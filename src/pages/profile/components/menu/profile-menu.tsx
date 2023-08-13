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

export const ProfileMenu = ({ opened, toggleOpened }: { opened: boolean, toggleOpened: (value: boolean) => void }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(addSuccessMessage('You\'ve signed out successfully!'))
        navigate(LOGIN_ROUTE)
        localStorage.removeItem('userId')
    }

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
                        <button className="flex items-center py-2 pr-6 text-error hover:font-bold" onClick={ console.log }>
                            <span className="mr-2 material-icons-round">delete</span> Delete Account
                        </button>
                    </li>
                </ul>
            </div>

        </div>
    )
}