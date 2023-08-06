import { DefaultIconButton } from '../../../button/components/icon/default-icon-button.tsx';
import { useField } from 'formik';
import { Unit } from '../../../../features/unit.ts';

export const AmountSelector = ({ ...props }) => {
    const FACTOR = props.factor ?? 10
    const [field, , helpers] = useField(props.name)

    const onRemove = () => {
        const newValue = field.value - FACTOR
        if (newValue > 0) helpers.setValue(newValue)
        else helpers.setValue(1)
    }

    const onAdd = () => {
        const newValue = field.value + FACTOR
        helpers.setValue(newValue)
    }

    return (
        <div className="flex flex-row items-center gap-4">
            <DefaultIconButton icon="remove" action={ onRemove } disabled={ field.value === 1 || props.disabled }/>
            <div>
                <input className="text-center text-xl font-medium text-gray-500 w-11 disabled:bg-white"
                       { ...field } { ...props }/>

                { props.unit !== Unit.AMOUNT &&
                    <span>
                        <span className="text-sm ml-0.5">{ props.unit }</span>
                    </span>
                }
            </div>
            <DefaultIconButton icon="add" action={ onAdd } disabled={ props.disabled }/>
        </div>
    )
}