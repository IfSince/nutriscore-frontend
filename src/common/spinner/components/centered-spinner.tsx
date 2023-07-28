import { CustomSpinner, SpinnerProps } from './custom-spinner.tsx';

export const CenteredSpinner = ({
    size = 'lg',
    fill = 'fill-cyan-300',
    backgroundClr = 'text-gray-300',
    className = '',
}: SpinnerProps & { className?: string }) => {
    return (
        <div className={ `flex justify-center items-center w-full z-[9999] ${ className }` }>
            <CustomSpinner size={ size } fill={ fill } backgroundClr={ backgroundClr }></CustomSpinner>
        </div>

    )
}