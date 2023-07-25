import { ButtonProps } from '../models/button-props.ts';
import { Button } from './button.tsx';

export const PrimaryButton = ({ children, type = 'button', action, className = '', preventDefault = true, disabled = false }: ButtonProps) =>
    <Button type={ type }
            action={ action }
            preventDefault={ preventDefault }
            disabled={ disabled }
            className={ `text-gray-50 bg-cyan-200 hover:bg-cyan-300 disabled:bg-cyan-200/60 disabled:hover:bg-cyan-200/60 ${ className }` }>
        { children }
    </Button>