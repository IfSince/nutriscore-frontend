import { PrimaryIconButton } from '../../../common/button/components/icon/primary-icon-button.tsx';
import { ProgressLinear } from '../../../common/progress/components/progress-linear.tsx';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks.ts';
import { REGISTER_STEP, selectRegister, submit, updateStateData } from '../../../redux/slices/register-slice.ts';
import { PrimaryButton } from '../../../common/button/components/primary-button.tsx';
import { Link, Outlet, useMatches, useNavigate } from 'react-router-dom';
import { RegisterData } from '../../../redux/models/register/register-data.ts';
import { REGISTER_NUTRITION_INTRO_ROUTE, REGISTER_OVERVIEW_ROUTE } from '../../../routes.ts';
import { useRef } from 'react';
import { QuestStep } from '../../../redux/models/quest-step.ts';

export const RegisterLayoutView = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const registerState = useAppSelector(selectRegister)

    const matches = useMatches().map(it => it.pathname)
    const isNutritionIntroRoute = () => matches.includes(REGISTER_NUTRITION_INTRO_ROUTE)
    const isOverviewRoute = () => matches.includes(REGISTER_OVERVIEW_ROUTE)
    const getCurrentStepSequence = () =>
        Object.values(REGISTER_STEP).find(it => matches.includes(it.route))?.sequence ||
        REGISTER_STEP.GOAL.sequence

    const nextRouteRef = useRef<QuestStep>()
    const backRouteRef = useRef<QuestStep>()

    const routeToStep = (step?: QuestStep) => step && navigate(step.route)
    const updateState = (data: Partial<RegisterData>) => dispatch(updateStateData({ ...data }))
    const submitRegisterForm = () => dispatch(submit())

    return (
        <div className="flex min-h-screen justify-center lg:min-h-fit">
            <div className="mb-10 flex w-full max-w-5xl flex-col justify-between px-5 pt-10 pb-0">
                <div>
                    <div className="flex items-center justify-between gap-14">
                        <PrimaryIconButton icon="arrow_back" action={ () => routeToStep(backRouteRef.current) }/>
                        <div className="w-full max-w-sm self-start justify-self-center">
                            <ProgressLinear width={ 10 }
                                            valueObject={ { value: getCurrentStepSequence(), total: REGISTER_STEP.OVERVIEW.sequence } }
                                            animationStyle="ease-out duration-500"/>
                        </div>
                        <PrimaryIconButton icon="settings" action={ () => console.log(registerState) }/>
                        {/*<div className="w-12"></div>*/ }
                    </div>

                    <h4 className="mt-10 text-center font-medium uppercase text-cyan-300 lg:mt-14 lg:text-lg">
                        Step <span className="tracking-wide">
                        {
                            `${ getCurrentStepSequence() }/${ REGISTER_STEP.OVERVIEW.sequence }`
                        }
                        </span>
                    </h4>

                    <div className="mt-2 flex flex-col items-center lg:mt-4">
                        <div className="flex w-full max-w-xl flex-col items-center">
                            <Outlet context={ [registerState.data, updateState, backRouteRef, nextRouteRef] }/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex w-full flex-col items-center justify-center lg:mt-14 xl:mt-20">
                    <PrimaryButton className="w-full max-w-md"
                                   action={ () => isOverviewRoute() ? submitRegisterForm() : routeToStep(nextRouteRef.current) }>
                        <span className="font-medium whitespace-nowraptext-base">
                            { isOverviewRoute() ? 'Register' : 'Continue' }
                        </span>
                    </PrimaryButton>
                    {
                        isNutritionIntroRoute() &&
                        <Link to={ '/register/personal' } className="mt-6 text-cyan-300 transition-colors hover:text-cyan-400">No thanks</Link>
                    }
                </div>
            </div>
        </div>
    )
}