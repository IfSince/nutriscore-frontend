import { BmiPanel } from '../components/bmi-panel.tsx';
import { RmrPanel } from '../components/rmr-panel.tsx';
import { Header } from '../../../common/header.tsx';
import { addSuccessMessage } from '../../../common/messages/global-message-slice.ts';
import { LOGIN_ROUTE } from '../../../routes.ts';
import { useAppDispatch } from '../../../hooks.ts';
import { useNavigate } from 'react-router-dom';
import { DefaultButton } from '../../../common/button/components/default-button.tsx';
import { useLogoutMutation } from '../../../features/login/login-api-slice.ts';
import { useContext, useEffect } from 'react';
import { AgePanel } from '../components/age-panel.tsx';
import { CurrentWeightPanel } from '../components/current-weight-panel.tsx';
import { UserIdContext } from '../../root.view.tsx';
import { useGetProfileMetadataByUserIdQuery } from '../../../features/user-metadata/user-metadata-api-slice.ts';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { BlurOverlay } from '../../../common/blur-overlay.tsx';

export const ProfileOverviewView = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const userId = useContext(UserIdContext)

    const [logout, logoutRequest] = useLogoutMutation()

    const { data: profileMetadata, isLoading, isError, error } = useGetProfileMetadataByUserIdQuery(userId)

    useEffect(() => {
        if (logoutRequest.isSuccess) {
            dispatch(addSuccessMessage('You\'ve signed out successfully!'))
            navigate(LOGIN_ROUTE)
            localStorage.removeItem('userId')
        }
    }, [dispatch, logoutRequest.isSuccess, navigate]);

    const logoutPanel =
        <DefaultButton className="hidden lg:flex aspect-square sm:aspect-auto sm:px-6" action={ logout }>
            <span className="material-icons-round">logout</span>
            <span className="ml-2 hidden sm:inline font-medium">Sign out</span>
        </DefaultButton>

    return (
        <>
            <Header title="Your Profile" additional={ logoutPanel } wrap={ false }/>
            <div className="w-full">
                <ApiErrorMessage apiErrorResponse={ error }/>
                <div className="relative flex flex-wrap lg:flex-row">
                    <BlurOverlay visible={ isLoading || isError }/>
                    <div className="flex-layout-row">
                        <BmiPanel isLoading={ isLoading } bmi={ profileMetadata?.bmi ?? 0 }/>
                        <RmrPanel isLoading={ isLoading } rmr={ profileMetadata?.rmr ?? 0 }/>

                        <div className="flex gap-5 lg:gap-10 grow">
                            <AgePanel isLoading={ isLoading } age={ profileMetadata?.age ?? 0 }/>
                            <CurrentWeightPanel isLoading={ isLoading } weight={ profileMetadata?.currentWeight ?? 0 }/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}