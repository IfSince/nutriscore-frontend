import { BmiPanel } from '../components/bmi-panel.tsx';
import { RmrPanel } from '../components/rmr-panel.tsx';
import { Panel } from '../../../common/panel.tsx';
import { Header } from '../../../common/header.tsx';
import { addSuccessMessage } from '../../../common/messages/global-message-slice.ts';
import { LOGIN_ROUTE } from '../../../routes.ts';
import { useAppDispatch } from '../../../hooks.ts';
import { useNavigate } from 'react-router-dom';
import { DefaultButton } from '../../../common/button/components/default-button.tsx';

export const ProfileOverviewView = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(addSuccessMessage('You\'ve signed out successfully!'))
        navigate(LOGIN_ROUTE)
        localStorage.removeItem('userId')
    }

    const logoutPanel =
        <DefaultButton className="aspect-square sm:aspect-auto sm:px-6" action={ logout }>
            <span className="material-icons-round">logout</span>
            <span className="ml-2 hidden sm:inline font-medium">Sign out</span>
        </DefaultButton>

    return (
        <>
            <Header title="Your Profile" additional={ logoutPanel } wrap={ false }/>
            <div className="w-full">
                {/*<ApiErrorMessage apiErrorResponse={ error }/>*/ }
                <div className="relative flex flex-wrap lg:flex-row">
                    {/*<BlurOverlay visible={ isLoading || isError }/>*/ }
                    <div className="flex-layout-row">
                        <BmiPanel isLoading={ false }/>
                        <RmrPanel isLoading={ false }/>
                    </div>
                    <div className="mt-5 flex-layout-row lg:mt-10">
                        <Panel className="grow">
                            <div>test</div>
                        </Panel>
                    </div>
                </div>
            </div>
        </>

    )
}