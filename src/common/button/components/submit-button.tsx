import { PrimaryButton } from './primary-button.tsx';
import { CenteredSpinner } from '../../spinner/components/centered-spinner.tsx';

interface SubmitButtonProps {
    text: string
    disabled?: boolean
    isSubmitting: boolean
    kind?: 'w-full' | 'grow'
}

export const SubmitButton = ({ text, disabled, isSubmitting, kind = 'w-full' }: SubmitButtonProps) => {
    return (
        <PrimaryButton className={ `max-w-md ${ kind }` }
                       text={ text }
                       preventDefault={ false }
                       disabled={ disabled || isSubmitting }
                       type="submit">
            {
                isSubmitting
                    ? <CenteredSpinner size="sm" backgroundClr="text-gray-50" fill="fill-cyan-200"/>
                    : <span className="font-medium whitespace-nowrap text-base">{ text }</span>
            }
        </PrimaryButton>
    )
}