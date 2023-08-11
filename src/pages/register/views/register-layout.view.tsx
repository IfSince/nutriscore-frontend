import { PrimaryIconButton } from '../../../common/button/components/icon/primary-icon-button.tsx';
import { PrimaryButton } from '../../../common/button/components/primary-button.tsx';
import { Outlet, useMatches, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTER_ACCOUNT_ROUTE, REGISTER_NUTRITION_INTRO_ROUTE } from '../../../routes.ts';
import { useEffect, useRef } from 'react';
import { Form, Formik } from 'formik';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';
import { REGISTER_STEP } from '../register-steps.ts';
import { getFormattedDate } from '../../../utils/format-date.ts';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { array, date, number, object } from 'yup';
import { QuestStep } from '../../../common/quest-step.ts';
import { useAppDispatch } from '../../../hooks.ts';
import { useRegisterMutation } from '../../../features/register/register-api-slice.ts';
import { addSuccessMessage } from '../../../common/messages/global-message-slice.ts';
import { Unit } from '../../../features/unit.ts';
import { Goal } from '../../../features/goal.ts';
import { RegisterForm } from '../../../features/register/models/register-form.ts';
import { NEW_ENTITY_ID } from '../../../common/constants.ts';
import { UserCreationValidationSchema } from '../../profile/validations/user-validation-schema.ts';
import { NutritionalDataCreationValidationSchema } from '../../profile/validations/nutritional-data-validation-schema.ts';
import { RegisterStepperSteps } from '../register-stepper-steps.ts';
import { RegisterStepper } from '../components/register-stepper.tsx';

export const RegisterLayoutView = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const matches = useMatches().map(it => it.pathname)
    const nextRouteRef = useRef<QuestStep>()
    const backRouteRef = useRef<QuestStep>()
    const validateCurrentStep = useRef<() => void>()

    const [register, { isLoading, isSuccess, error }] = useRegisterMutation()

    useEffect(() => {
        if (isSuccess) {
            dispatch(addSuccessMessage('Registration was successful! You can now log in with your credentials.'))
            navigate(LOGIN_ROUTE)
        }
    })

    const RegisterValidationSchema = object().shape({
        user: UserCreationValidationSchema,
        weightRecording: object().shape({
            weight: number().required().min(0).max(300),
            dateOfRecording: date().required(),
        }),
        nutritionalData: NutritionalDataCreationValidationSchema,
        individualMacroDistribution: object().optional().nullable().shape({
            protein: number().required().min(0).max(100),
            carbohydrates: number().required().min(0).max(100),
            fats: number().required().min(0).max(100),
        }),
        allergenics: array(),

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
        allergenics: [],
    }

    const isNutritionIntroRoute = () => matches.includes(REGISTER_NUTRITION_INTRO_ROUTE)
    const isAccountRoute = () => matches.includes(REGISTER_ACCOUNT_ROUTE)
    const getCurrentStepSequence = () => Object.values(REGISTER_STEP).find(it => matches.includes(it.route))?.sequence || REGISTER_STEP.PERSONAL.sequence
    const routeToStep = (step?: QuestStep) => step && navigate(step.route)

    const goBack = () => {
        backRouteRef.current
            ? routeToStep(backRouteRef.current)
            : navigate(LOGIN_ROUTE)
    }

    const validateAndContinue = () => {
        validateCurrentStep.current && validateCurrentStep.current()
        routeToStep(nextRouteRef.current)
    }

    const setDefaultNutritionalProfile = () => {
        validateCurrentStep.current && validateCurrentStep.current()
        routeToStep(REGISTER_STEP.ALLERGENIC)
    }

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
                            <div className="flex items-center justify-between gap-10 md:gap-14">
                                <PrimaryIconButton icon="arrow_back" action={ goBack }/>

                                <div className="w-full max-w-sm self-start justify-self-center">
                                    <RegisterStepper steps={ RegisterStepperSteps }/>
                                </div>

                                <div className="h-11 lg:h-12 aspect-square" aria-hidden></div>
                            </div>

                            <h4 className="mt-10 text-center font-medium uppercase text-cyan-300 lg:mt-14 lg:text-lg">
                                Step <span className="tracking-wide">
                        {
                            `${ getCurrentStepSequence() }/${ REGISTER_STEP.ACCOUNT.sequence }`
                        }
                        </span>
                            </h4>

                            <div className="mt-2 flex flex-col items-center lg:mt-4">
                                <div className="flex w-full max-w-xl flex-col items-center">
                                    <ApiErrorMessage apiErrorResponse={ error }/>
                                    <Outlet context={ [backRouteRef, nextRouteRef, validateCurrentStep, error] }/>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex w-full flex-col items-center justify-center lg:mt-14 xl:mt-20">
                            {
                                isAccountRoute()
                                    ? <SubmitButton text="Submit" isSubmitting={ isLoading }/>
                                    : <PrimaryButton className="w-full max-w-md" action={ validateAndContinue }>
                                        <span className="whitespace-nowrap text-base font-medium">Continue</span>
                                    </PrimaryButton>
                            }
                            {
                                isNutritionIntroRoute() &&
                                <button className="mt-6 text-cyan-200 transition-colors hover:text-cyan-300" onClick={ setDefaultNutritionalProfile }>
                                    No thanks
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}