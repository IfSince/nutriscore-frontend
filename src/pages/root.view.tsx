import { Outlet, useMatch, useNavigate } from 'react-router-dom';
import { PrimaryIconButton } from '../common/button/components/icon/primary-icon-button.tsx';
import { GlobalDatePicker } from '../common/date-picker/global-date-picker.tsx';
import { createContext, useState } from 'react';
import { ProfileMenu } from './profile/components/menu/profile-menu.tsx';
import { Menu } from '../common/menu/components/menu.tsx';
import { MENU_ITEMS } from '../common/menu/model/menu-items.ts';

export const UserIdContext = createContext(Number(localStorage.getItem('userId')))

export const RootView = () => {
    const diaryMatch = useMatch('/diary/*')
    const statisticsMatch = useMatch('/statistics')
    const profileMatch = useMatch('/profile/*')
    const navigate = useNavigate()
    const userId = Number(localStorage.getItem('userId'))

    const isDiarySubSite = !!diaryMatch?.params['*']
    const isStatisticsSite = !!statisticsMatch
    const isProfileSite = !!profileMatch

    const [profileMenuOpened, setProfileMenuOpened] = useState(false)

    const renderHeaderOrButtons = () => {
        if (isDiarySubSite) {
            return <PrimaryIconButton icon="arrow_back" action={ () => navigate(-1) }/>
        } else if (isProfileSite) {
            return (
                <>
                    <PrimaryIconButton className="fixed z-9999 lg:hidden"
                                       icon={ profileMenuOpened ? 'close' : 'menu' }
                                       action={ () => setProfileMenuOpened((curr) => !curr) }/>
                    <h1 className="hidden text-2xl font-bold text-cyan-300 md:text-3xl lg:block">Nutriscore</h1>
                </>
            )
        }
        return <h1 className="text-2xl font-bold text-cyan-300 md:text-3xl">Nutriscore</h1>
    }

    return <div className="flex justify-center text-gray-600 lg:min-h-screen">
        <ProfileMenu opened={ profileMenuOpened } toggleOpened={ setProfileMenuOpened }/>
        <div className="flex w-full flex-col px-5 pt-16 pb-0 max-w-screen-3xl md:pt-10 lg:px-10">
            <header className="mb-8 flex w-full flex-col lg:mb-16 lg:flex-row">
                <div className="flex h-10 w-80 items-center lg:mb-0 lg:h-12">
                    {
                        renderHeaderOrButtons()
                    }
                </div>
                <div className="box-border flex grow lg:justify-end">
                    { !isDiarySubSite && !isStatisticsSite && !isProfileSite && <div className="mt-8 lg:mt-0"><GlobalDatePicker/></div> }
                </div>
            </header>

            <div className="flex w-full grow flex-col lg:flex-row">
                <Menu items={ MENU_ITEMS }/>
                <main className="mb-32 flex h-fit w-full grow flex-col lg:mb-10 lg:ml-10">
                    <UserIdContext.Provider value={ userId }>
                        <Outlet/>
                    </UserIdContext.Provider>
                </main>
            </div>
        </div>
    </div>;
}