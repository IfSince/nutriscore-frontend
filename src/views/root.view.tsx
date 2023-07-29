import { Outlet, useMatch, useNavigate } from 'react-router-dom';
import { MENU_ITEMS } from '../features/menu/model/menu-items.ts';
import { Menu } from '../features/menu/components/menu.tsx';
import { PrimaryIconButton } from '../common/button/components/icon/primary-icon-button.tsx';
import { GlobalDatePicker } from '../common/date-picker/global-date-picker.tsx';
import { GlobalMessages } from '../features/messages/components/global-messages.tsx';
import { createContext } from 'react';

export const UserIdContext = createContext(Number(localStorage.getItem('userId')))

export const RootView = () => {
    const isMatch = useMatch('diary/*')
    const navigate = useNavigate()
    const userId = Number(localStorage.getItem('userId'))

    return <div className="flex justify-center lg:min-h-screen">
        <div className="flex w-full flex-col px-5 pt-16 pb-0 max-w-screen-3xl md:pt-10 lg:px-10">
            <header className="mb-8 flex w-full flex-col lg:mb-16 lg:flex-row">
                <div className="mb-10 flex h-10 w-80 items-center lg:mb-0 lg:h-12">
                    {
                        !isMatch ?
                            <h1 className="text-2xl font-bold text-cyan-300 md:text-3xl">Nutriscore</h1> :
                            <PrimaryIconButton icon="arrow_back" action={ () => navigate(-1) }/>
                    }
                </div>
                <div className="box-border flex grow lg:justify-end">
                    { !isMatch && <GlobalDatePicker/> }
                </div>
            </header>

            <div className="flex w-full grow flex-col lg:flex-row">
                <Menu items={ MENU_ITEMS }/>
                <main className="mb-32 flex flex-col h-fit w-full grow lg:mb-10 lg:ml-10">
                    <GlobalMessages/>
                    <UserIdContext.Provider value={ userId }>
                        <Outlet/>
                    </UserIdContext.Provider>
                </main>
            </div>
        </div>
    </div>;
}