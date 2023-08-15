import { DefaultIconButton } from '../../../button/components/icon/default-icon-button.tsx';
import { useField } from 'formik';
import { Unit, UNIT_ABBREVIATIONS } from '../../../../features/unit.ts';

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
        <div className={ `flex flex-row items-center gap-2 ${ props.className }` }>
            <DefaultIconButton className="hidden md:flex" icon="remove" action={ onRemove } disabled={ field.value === 1 || props.disabled }/>
            <DefaultIconButton className="flex md:hidden !rounded-full h-6" icon="remove" action={ onRemove } disabled={ field.value === 1 || props.disabled }/>
            <div className="flex justify-center items-end">
                <input className="text-center text-xl font-medium text-gray-500 w-11 disabled:bg-white"
                       { ...field } { ...props }/>

                { props.unit !== Unit.AMOUNT &&
                    <span>
                        <span className="text-sm font-medium text-gray-500 ml-0.5">{ UNIT_ABBREVIATIONS[props.unit] }</span>
                    </span>
                }
            </div>
            <DefaultIconButton className="hidden md:flex" icon="add" action={ onAdd } disabled={ props.disabled }/>
            <DefaultIconButton className="flex md:hidden !rounded-full h-6" icon="add" action={ onAdd } disabled={ props.disabled }/>
        </div>
    )
}