import { Outlet, useMatch, useNavigate } from 'react-router-dom';
import { CustomDatePicker } from '../common/custom-date-picker.tsx';
import { MENU_ITEMS } from '../features/menu/model/menu-items.ts';
import { Menu } from '../features/menu/components/menu.tsx';
import { IconButton } from '../common/button/components/icon-button.tsx';

export const RootView = () => {
    const isMatch = useMatch('diary/*')
    const navigate = useNavigate()

    return <div className="flex justify-center lg:min-h-screen">
        <div className="flex w-full flex-col px-5 pt-16 pb-0 max-w-screen-3xl md:pt-10 lg:px-10">
            <header className="mb-8 flex w-full flex-col lg:mb-16 lg:flex-row">
                <div className="mb-10 flex h-10 w-80 items-center lg:mb-0 lg:h-12">
                    {
                        !isMatch ?
                            <h1 className="text-2xl font-bold text-cyan-300 md:text-3xl">Nutriscore</h1> :
                            <IconButton icon="arrow_back"
                                        level="primary"
                                        action={ () => navigate(-1) }
                                        iconStyles="text-2xl lg:text-3xl -ml-0.5 lg:ml-0"/>
                    }
                </div>
                <div className="box-border flex grow lg:justify-end">
                    { !isMatch && <CustomDatePicker/> }
                </div>
            </header>

            <div className="flex w-full grow flex-col lg:flex-row">
                <Menu items={ MENU_ITEMS }/>
                <main className="mb-32 flex h-fit w-full grow flex-col flex-wrap gap-10 lg:mb-10 lg:ml-10 lg:flex-row">
                    <Outlet/>
                </main>
            </div>
        </div>
    </div>;
}