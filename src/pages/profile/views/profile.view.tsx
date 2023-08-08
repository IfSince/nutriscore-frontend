import { Outlet } from 'react-router-dom';
import { ProfileMenu } from '../components/menu/profile-menu.tsx';
import { PrimaryIconButton } from '../../../common/button/components/icon/primary-icon-button.tsx';
import { useState } from 'react';

export const ProfileView = () => {
    const [profileMenuOpened, setProfileMenuOpened] = useState(false)

    return (
        <>
            <ProfileMenu opened={ profileMenuOpened } toggleOpened={ setProfileMenuOpened }/>
            <PrimaryIconButton className="lg:hidden mb-10 z-9999"
                               icon={ profileMenuOpened ? 'close' : 'settings' }
                               action={ () => setProfileMenuOpened((curr) => !curr) }/>
            <Outlet/>
        </>
    );
}