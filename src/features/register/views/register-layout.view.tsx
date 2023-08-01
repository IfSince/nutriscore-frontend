import { PrimaryIconButton } from '../../../common/button/components/icon/primary-icon-button.tsx';
import { ProgressLinear } from '../../../common/progress/components/progress-linear.tsx';
import { PrimaryButton } from '../../../common/button/components/primary-button.tsx';
import { Link, Outlet, useMatches, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTER_NUTRITION_INTRO_ROUTE, REGISTER_OVERVIEW_ROUTE, REGISTER_PERSONAL_ROUTE } from '../../../routes.ts';
import { useEffect, useRef } from 'react';
import { QuestStep } from '../../../redux/models/quest-step.ts';
import { Form, Formik } from 'formik';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';
import { Unit } from '../../unit.ts';
import { REGISTER_STEP } from '../register-steps.ts';
import { useRegisterMutation } from '../register-api-slice.ts';
import { RegisterForm } from '../models/register-form.ts';
import { NEW_ENTITY_ID } from '../../../redux/constants.ts';
import { getFormattedDate } from '../../../utils/format-date.ts';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { addSuccessMessage } from '../../messages/global-message-slice.ts';
import { useAppDispatch } from '../../../redux/hooks.ts';
import { Goal } from '../../goal.ts';
import { array, date, mixed, number, object, ref, string } from 'yup';

export const RegisterLayoutView = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const matches = useMatches().map(it => it.pathname)
    const nextRouteRef = useRef<QuestStep>()
    const backRouteRef = useRef<QuestStep>()

    const [register, { isLoading, isSuccess, error }] = useRegisterMutation()

    useEffect(() => {
        if (isSuccess) {
            dispatch(addSuccessMessage('Registration was successful! You can now log in with your credentials.'))
            navigate(LOGIN_ROUTE)
        }
    })

    const RegisterValidationSchema = object().shape({
        user: object().shape({
            userTypeId: number().required(),
            email: string().required().max(255).email(),
            password: string().required().min(8),
            confirmPassword: string().required().oneOf([ref('password')]),
            firstName: string().required().min(2).max(255),
            lastName: string().required().min(2).max(255),
            genderId: number().required(),
            dateOfBirth: date().required().max(new Date()),
            height: number().required().min(0),
            selectedWeightUnit: mixed<Unit>().required().oneOf(Object.values(Unit)),
            selectedHeightUnit: mixed<Unit>().required().oneOf(Object.values(Unit)),
        }),
        weightRecording: object().shape({
            weight: number().required().min(0).max(300),
            dateOfRecording: date().required(),
        }),
        nutritionalData: object().shape({
            nutritionTypeId: number().required(),
            calculationTypeId: number().required(),
            activityLevelId: number().required(),
            physicalActivityLevelActivities: object()
                .optional()
                .shape({
                    sleeping: number().required().min(0).max(24),
                    onlySitting: number().required().min(0).max(24),
                    occasionalActivities: number().required().min(0).max(24),
                    mostlySittingOrStanding: number().required().min(0).max(24),
                    mostlyWalkingOrStanding: number().required().min(0).max(24),
                    physicallyDemanding: number().required().min(0).max(24),
                }),
            goal: mixed<Goal>().required().oneOf(Object.values(Goal)),
            calorieRestriction: number().optional().min(-500).max(500),
        }),
        individualMacroDistribution: object().optional().shape({
            protein: number().required().min(0).max(100),
            carbohydrates: number().required().min(0).max(100),
            fats: number().required().min(0).max(100),
        }),
        allergenicIds: array(),

    })

    const registerForm: RegisterForm = {
        user: {
            id: NEW_ENTITY_ID,
            userTypeId: 1,
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            genderId: '1',
            dateOfBirth: '2000-01-01',
            height: 180,
            selectedWeightUnit: Unit.KILOGRAM,
            selectedHeightUnit: Unit.CENTIMETER,
        },
        weightRecording: {
            id: NEW_ENTITY_ID,
            userId: NEW_ENTITY_ID,
            dateOfRecording: getFormattedDate(new Date()),
            weight: 80,
        },
        nutritionalData: {
            id: NEW_ENTITY_ID,
            userId: NEW_ENTITY_ID,
            nutritionTypeId: '1',
            calculationTypeId: '1',
            activityLevelId: '1',
            physicalActivityLevelActivities: {
                sleeping: 0,
                onlySitting: 0,
                occasionalActivities: 0,
                mostlySittingOrStanding: 0,
                mostlyWalkingOrStanding: 0,
                physicallyDemanding: 0,
            },
            goal: Goal.LOOSE,
            calorieRestriction: 0,
        },
        individualMacroDistribution: {
            id: NEW_ENTITY_ID,
            nutritionalDataId: NEW_ENTITY_ID,
            protein: 0,
            carbohydrates: 0,
            fats: 0,
        },
        allergenicIds: [],
    }

    const isNutritionIntroRoute = () => matches.includes(REGISTER_NUTRITION_INTRO_ROUTE)
    const isOverViewRoute = () => matches.includes(REGISTER_OVERVIEW_ROUTE)
    const getCurrentStepSequence = () => Object.values(REGISTER_STEP).find(it => matches.includes(it.route))?.sequence || REGISTER_STEP.GOAL.sequence
    const routeToStep = (step?: QuestStep) => step && navigate(step.route)

    return (
        <Formik initialValues={ registerForm }
                validationSchema={ RegisterValidationSchema }
                validateOnBlur={ true }
                validateOnChange={ false }
                onSubmit={ register }>
            <Form>
                <div className="flex min-h-screen justify-center lg:min-h-fit">
                    <div className="mb-10 flex w-full max-w-5xl flex-col justify-between px-5 pt-10 pb-0">
                        <div>
                            <div className="flex items-center justify-between gap-14">
                                <PrimaryIconButton icon="arrow_back" action={ () => routeToStep(backRouteRef.current) }/>
                                <div className="w-full max-w-sm self-start justify-self-center">
                                    <ProgressLinear width={ 10 }
                                                    valueObject={ {
                                                        value: getCurrentStepSequence(),
                                                        total: REGISTER_STEP.OVERVIEW.sequence,
                                                    } }
                                                    animationStyle="ease-out duration-500"/>
                                </div>
                                <PrimaryIconButton icon="arrow_forward" action={ () => routeToStep(REGISTER_STEP.OVERVIEW) }/>
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
                                    <ApiErrorMessage apiErrorResponse={ error }/>
                                    <Outlet context={ [backRouteRef, nextRouteRef] }/>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex w-full flex-col items-center justify-center lg:mt-14 xl:mt-20">
                            {
                                isOverViewRoute()
                                    ? <SubmitButton text="Submit" isSubmitting={ isLoading }/>
                                    : <PrimaryButton className="w-full max-w-md"
                                                     action={ () => routeToStep(nextRouteRef.current) }>
                                        <span className="whitespace-nowrap text-base font-medium">Continue</span>
                                    </PrimaryButton>
                            }
                            {
                                isNutritionIntroRoute() &&
                                <Link className="mt-6 text-cyan-300 transition-colors hover:text-cyan-400" to={ REGISTER_PERSONAL_ROUTE }>
                                    No thanks
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}