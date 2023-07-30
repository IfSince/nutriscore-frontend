import { ButtonProps } from '../models/button-props.ts';
import { Button } from './button.tsx';

export const DefaultButton = ({ type = 'button', action, children, className = '', disabled }: ButtonProps) =>
    <Button type={ type }
            action={ action }
            disabled={ disabled }
            className={ `${ disabled ? 'bg-gray-100 text-gray-300' : 'hover:text-gray-600 hover:bg-gray-300 text-gray-500 bg-gray-200' } ${ className }` }>
        { children }
    </Button>