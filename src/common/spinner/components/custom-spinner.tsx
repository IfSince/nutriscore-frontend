import { FlowbiteSize } from '../../flowbite-size.ts';
import { Spinner } from 'flowbite-react';

export interface SpinnerProps {
    size?: FlowbiteSize,
    fill?: string
    background?: string
}

export const CustomSpinner = ({ size = 'lg', fill = 'fill-cyan-300', background = 'text-gray-300' }: SpinnerProps) =>
    <Spinner className={ `${ fill } ${ background }` } size={ size }/>