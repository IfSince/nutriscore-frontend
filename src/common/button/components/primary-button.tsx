import { ButtonProps } from '../models/button-props.ts';
import { Button } from './button.tsx';

export const PrimaryButton = ({ type = 'button', action, children, className = '' }: ButtonProps) =>
    <Button type={ type }
            action={ action }
            className={ `text-gray-50 bg-cyan-200 hover:bg-cyan-300 ${ className }` }>
        { children }
    </Button>