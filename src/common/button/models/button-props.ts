import { AbstractButtonProps } from './abstract-button-props.ts';
import { ReactNode } from 'react';

export interface ButtonProps extends AbstractButtonProps {
    children: ReactNode
}