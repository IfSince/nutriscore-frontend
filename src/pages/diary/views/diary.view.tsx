import { Outlet, useNavigate } from 'react-router-dom';
import { PrimaryIconButton } from '../../../common/button/components/icon/primary-icon-button.tsx';

export const DiaryView = () => {
    const navigate = useNavigate()

    return (
        <>
            <PrimaryIconButton className="lg:hidden mb-10" icon="arrow_back" action={ () => navigate(-1) }/>
            <Outlet/>
        </>
    )
}
