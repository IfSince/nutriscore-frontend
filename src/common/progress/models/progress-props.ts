import { ValueObject } from '../../../redux/models/value-object.ts';

export interface ProgressProps {
    width: number
    valueObject: ValueObject
    trackStyles?: string
    indicatorStyles?: string
}