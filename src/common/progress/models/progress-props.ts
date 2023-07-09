import { ValueObject } from '../../../redux/models/value-object.ts';

export interface ProgressProps {
    size: number
    width: number
    valueObject: ValueObject
    trackStyles?: string
    indicatorStyles?: string
}