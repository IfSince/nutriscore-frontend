import { ProgressProps } from '../models/progress-props.ts';
import { ProgressLinear } from './progress-linear.tsx';

export const ProgressLinearLabeled = (data: ProgressProps) => {
    return (
        <>
            <div className="mt-2 mb-3">
                <ProgressLinear { ...data }/>
            </div>
            <span className="text-xl font-medium">{ data.valueObject.value }/{ data.valueObject.total } <span
                className="text-base font-normal">{ data.valueObject.unit }</span></span>
        </>
    )
}