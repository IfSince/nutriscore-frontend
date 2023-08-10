import { Outlet } from 'react-router-dom';

export const DiaryView = () => {
    return (
        <>
            {/*<PrimaryIconButton className="lg:hidden mb-10" icon="arrow_back" action={ () => navigate(-1) }/>*/}
            <Outlet/>
        </>
    )
}
