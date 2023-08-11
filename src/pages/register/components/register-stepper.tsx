import { StepperEntry } from '../models/stepper-entry.ts';
import { useMatches, useNavigate } from 'react-router-dom';
import { useFormikContext } from 'formik';
import { RegisterForm } from '../../../features/register/models/register-form.ts';

export const RegisterStepper = ({ steps }: { steps: StepperEntry[] }) => {
    const navigate = useNavigate()
    const matches = useMatches()
    const form = useFormikContext<RegisterForm>()

    const getStyles = (step: StepperEntry, isTouched?: boolean, hasErrors?: boolean) => {
        let styles = 'flex items-center transition-colors '

        styles +=
            step.isSubmit ?
                'w-fit' :
                'after:content-[\'\'] after:w-full after:h-0 after:border-b after:border-4 after:inline-block w-full '

        if (hasErrors) {
            styles += 'after:border-error'
        } else if (isTouched) {
            styles += 'after:border-cyan-200'
        } else {
            styles += 'after:border-gray-200'
        }


        return styles
    }

    const getBtnStyles = (isSelected: boolean, isTouched?: boolean, hasErrors?: boolean) => {
        let styles = 'flex items-center justify-center aspect-square rounded-full w-4 md:w-5 shrink-0 hover:bg-cyan-400 transition-colors '

        if (isSelected) {
            styles += 'bg-cyan-400'
        } else if (hasErrors) {
            styles += 'bg-error'
        } else if (isTouched) {
            styles += 'bg-cyan-200'
        } else {
            styles += 'bg-gray-200'
        }

        return styles
    }

    const onClick = (route: string) => {
        navigate(route)
    }

    return (
        <ol className="flex items-center w-full">
            {
                steps.map(step => {
                    const isExactMatch = matches.filter(it => it.pathname === step.route || step.includeRoutes?.includes(it.pathname)).length > 0
                    const fieldsMetadata = step.fieldNames?.map(name => form.getFieldMeta(name))

                    const isTouched = fieldsMetadata?.some(meta => meta.touched)
                    const hasErrors = fieldsMetadata?.some(meta => meta.error)


                    return (
                        <li key={ step.route } className={ getStyles(step, isTouched, hasErrors) }>
                            <button type="button" className={ getBtnStyles(isExactMatch, isTouched, hasErrors) } onClick={ () => onClick(step.route) }/>
                        </li>
                    );
                })
            }
        </ol>
    )
}
