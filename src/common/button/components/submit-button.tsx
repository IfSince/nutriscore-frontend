import { PrimaryButton } from './primary-button.tsx';
import { CenteredSpinner } from '../../spinner/components/centered-spinner.tsx';

export const SubmitButton = ({ text, disabled, submitting }: { text: string, disabled: boolean, submitting: boolean }) => {
    return (
        <PrimaryButton className="w-full max-w-md"
                       text={ text }
                       preventDefault={ false }
                       disabled={ disabled }
                       type="submit">
            {
                submitting ?
                    <CenteredSpinner size="md" backgroundClr="text-gray-50" fill="fill-cyan-200"/> :
                    <span className="font-medium whitespace-nowrap text-base">{ text }</span>
            }
        </PrimaryButton>
    )
}