import { CustomSpinner, SpinnerProps } from './custom-spinner.tsx';

export const CenteredSpinner = ({
    size = 'lg',
    fill = 'fill-cyan-300',
    background = 'text-gray-300',
    className = '',
}: SpinnerProps & { className?: string }) => {
    return (
        <div className={ `flex justify-center items-center w-full ${ className }` }>
            <CustomSpinner size={ size } fill={ fill } background={ background }></CustomSpinner>
        </div>

    )
}