import { ButtonProps } from '../models/button-props.ts';

export const Button = ({ type = 'button', action, children, className }: ButtonProps) =>
    <button
        type={ type }
        onClick={ action }
        className={ `flex h-10 lg:h-12 items-center justify-center rounded-md transition-colors ${ className }` }>
        { children }
    </button>