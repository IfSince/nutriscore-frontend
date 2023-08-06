import { RegisterHeader } from '../components/register-header.tsx';
import { RegisterOutletContext } from '../models/register-outlet-context.ts';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { REGISTER_STEP } from '../register-steps.ts';

export const NutritionIntroStepView = () => {
    const [backRef, nextRef]: RegisterOutletContext = useOutletContext()

    useEffect(() => {
        backRef.current = REGISTER_STEP.ALLERGENIC
        nextRef.current = REGISTER_STEP.ACTIVITY_LEVEL
    }, [backRef, nextRef])

    return (
        <>
            <RegisterHeader title="Do you want to personalize your nutrition?"/>
            <p className="mt-2 max-w-md text-center text-gray-400 lg:mb-20 xl:mb-30">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda maxime molestiae numquam placeat saepe.
            </p>
        </>
    )
}