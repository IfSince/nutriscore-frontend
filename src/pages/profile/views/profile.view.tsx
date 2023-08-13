import { Outlet, useMatch, useNavigate, useParams } from 'react-router-dom';
import { ProfileMenu } from '../components/menu/profile-menu.tsx';
import { PrimaryIconButton } from '../../../common/button/components/icon/primary-icon-button.tsx';
import { useState } from 'react';
import { PROFILE_NEW_MEAL_DETAIL_ROUTE } from '../../../routes.ts';

export const ProfileView = () => {
    const navigate = useNavigate()
    const [profileMenuOpened, setProfileMenuOpened] = useState(false)
    const { id } = useParams()
    const isNewMealView = !!useMatch(PROFILE_NEW_MEAL_DETAIL_ROUTE)


    const isMealView = !!id || isNewMealView

    const onClick = () => {
        isMealView
            ? navigate(-1)
            : setProfileMenuOpened((curr) => !curr)
    }

    return (
        <>
            <ProfileMenu opened={ profileMenuOpened } toggleOpened={ setProfileMenuOpened }/>
            <PrimaryIconButton className="lg:hidden mb-10 z-9999"
                               icon={ profileMenuOpened ? 'close' : isMealView ? 'arrow_back' : 'settings' }
                               action={ onClick }/>
            <Outlet/>
        </>
    );
}