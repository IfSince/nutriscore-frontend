import { ButtonProps } from '../models/button-props.ts';
import { Button } from './button.tsx';

export const DeleteButton = ({ type = 'button', action, children, className = '' }: ButtonProps) =>
    <Button type={ type }
            action={ action }
            className={ `text-gray-50 bg-red hover:bg-red-600 ${ className }` }>
        { children }
    </Button>