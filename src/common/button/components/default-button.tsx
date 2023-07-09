import { ButtonProps } from '../models/button-props.ts';
import { Button } from './button.tsx';

export const DefaultButton = ({ type = 'button', action, children, className = '' }: ButtonProps) =>
    <Button type={ type }
            action={ action }
            className={ `text-gray-500 bg-gray-200 hover:text-gray-600 hover:bg-gray-300 ${ className }` }>
        { children }
    </Button>