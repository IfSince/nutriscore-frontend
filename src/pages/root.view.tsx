import { Outlet } from 'react-router-dom';
import { createContext } from 'react';
import { Menu } from '../common/menu/components/menu.tsx';
import { MENU_ITEMS } from '../common/menu/model/menu-items.ts';

export const UserIdContext = createContext(Number(localStorage.getItem('userId')))

export const RootView = () => {
    const userId = Number(localStorage.getItem('userId'))

    return (
        <div className="flex justify-center text-gray-600 lg:min-h-screen">
            <div className="flex w-full px-5 mt-16 lg:px-10">
                <Menu items={ MENU_ITEMS }/>
                <main className="mb-32 flex h-fit w-full grow flex-col lg:mb-10 lg:ml-10">
                    <UserIdContext.Provider value={ userId }>
                        <Outlet/>
                    </UserIdContext.Provider>
                </main>
            </div>
        </div>
    )
}