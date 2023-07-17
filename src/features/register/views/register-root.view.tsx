import { useAppSelector } from '../../../redux/hooks.ts';
import { selectRegister } from '../../../redux/slices/register-slice.ts';
import { Navigate, useMatch } from 'react-router-dom';
import { RegisterLayoutView } from './register-layout.view.tsx';

export const RegisterRootView = () => {
    const registerState = useAppSelector(selectRegister)
    const currentStep = registerState.steps[registerState.currentStepIndex]

    const match = useMatch(`/register/${ currentStep.route }`)
    return match ? <RegisterLayoutView/> : <Navigate to={ `/register/${ currentStep.route }` }></Navigate>

}