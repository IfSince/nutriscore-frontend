import { AbstractButtonProps } from './abstract-button-props.ts';

export interface IconButtonProps extends AbstractButtonProps {
    icon: string
    iconStyles?: string
}