import { ButtonProps } from '../models/button-props.ts';
import { Button } from './button.tsx';
import { CenteredSpinner } from '../../spinner/components/centered-spinner.tsx';

export const PrimaryButton = ({ type = 'button', action, children, className = '', isLoading = false }: ButtonProps) =>
    <Button type={ type }
            action={ action }
            className={ `text-gray-50 bg-cyan-200 hover:bg-cyan-300 disabled:bg-cyan-200/60 disabled:hover:bg-cyan-200/60 ${ className }` }
            disabled={ isLoading }>
        { isLoading ? <CenteredSpinner size="md" backgroundClr="text-gray-50" fill="fill-cyan-200"/> : children }
    </Button>