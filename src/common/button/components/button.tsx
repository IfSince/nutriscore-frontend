import { AbstractButtonProps } from '../models/abstract-button-props.ts';
import { ReactNode } from 'react';

interface ButtonProps extends AbstractButtonProps {
    children: ReactNode
    className?: string
    type?: 'button' | 'submit' | 'reset'
}

export const Button = ({ className, children, size = 'medium', level = 'secondary', action, type = 'button' }: ButtonProps) => {
    const height = size == 'medium' ? 'h-10 lg:h-12' : 'h-8 lg:h-10'

    let styles;
    switch (level) {
        case 'primary':
            styles = 'text-gray-50 bg-cyan-200 hover:bg-cyan-300'
            break
        case 'secondary':
            styles = 'text-gray-500 bg-gray-200 hover:text-gray-600 hover:bg-gray-300'
            break
        case 'delete':
            styles = 'text-gray-50 bg-red hover:bg-red-600'
            break
    }
    return (
        <button
            type={ type }
            onClick={ action }
            className={ `flex ${ height } ${ styles } items-center justify-center rounded-md transition-colors ${ className }` }>
            { children }
        </button>
    );
}