import { ValueObject } from '../../value-object.ts';

export interface ProgressProps {
    width: number
    valueObject: ValueObject
    trackStyles?: string
    indicatorStyles?: string
    animationStyle?: string
    isLoading?: boolean
}