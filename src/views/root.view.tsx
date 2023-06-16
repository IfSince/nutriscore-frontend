import { CustomDatePicker } from '../components/common/custom-date-picker.tsx';
import { Menu } from '../components/menu/menu.tsx';
import { MENU_ITEMS } from '../components/menu/model/menu-items.ts';
import { Outlet } from 'react-router-dom';

export const RootView = () =>
    (
        <div className="flex justify-center lg:min-h-screen">
            <div className="flex w-full flex-col px-5 pt-16 pb-0 max-w-screen-3xl md:pt-10 lg:px-10">
                <header className="mb-8 flex w-full flex-col lg:mb-16 lg:flex-row">
                    <div className="mb-10 flex w-80 items-center lg:mb-0">
                        <h1 className="text-2xl font-bold text-cyan-300 md:text-3xl">Nutriscore</h1>
                    </div>
                    <div className="flex grow lg:justify-end">
                        <CustomDatePicker/>
                    </div>
                </header>

                <div className="flex w-full grow flex-col lg:flex-row">
                    <Menu items={ MENU_ITEMS }/>
                    <main className="mb-32 flex h-fit w-full grow flex-col flex-wrap gap-10 lg:mb-10 lg:ml-10 lg:flex-row">
                        <Outlet/>
                    </main>
                </div>
            </div>
        </div>
    )