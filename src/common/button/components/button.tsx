import { ButtonProps } from '../models/button-props.ts';
import React from 'react';

export const Button = ({ type = 'button', action, children, className, preventDefault = true }: ButtonProps) => {
    const onClick = (event: React.SyntheticEvent) => {
        preventDefault && event.preventDefault()
        action(event)
    }

    return <button
        type={ type }
        onClick={ onClick }
        className={ `flex h-11 lg:h-12 items-center justify-center rounded-md transition-colors ${ className }` }>
        { children }
    </button>;
}