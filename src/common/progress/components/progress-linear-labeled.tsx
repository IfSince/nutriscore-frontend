import { ProgressProps } from '../models/progress-props.ts';
import { ProgressLinear } from './progress-linear.tsx';

export const ProgressLinearLabeled = (props: ProgressProps) =>
    (
        <>
            <div className="mt-2 mb-3">
                <ProgressLinear { ...props }/>
            </div>
            <span className="text-xl font-medium text-gray-600">
                { props.valueObject.value }/{ props.valueObject.total }
                <span className="text-base font-normal">{ props.valueObject.unit }</span>
            </span>
        </>
    )