import { IconButton } from '../../../common/button/components/icon-button.tsx';

interface FoodItemAmountSelectorProps {
    amount: number
    unit: string
    onRemove: (value: number) => void
    onAdd: (value: number) => void
}

export const FoodItemAmountSelector = ({ amount, unit, onRemove, onAdd }: FoodItemAmountSelectorProps) =>
    <div className="flex flex-row items-center gap-4">
        <IconButton icon="remove" action={ onRemove }/>
        <span>
            <span className="text-lg font-medium text-gray-600">{ amount }</span>
            <span className="text-sm ml-0.5">{ unit }</span>
        </span>
        <IconButton icon="add" action={ onAdd }/>
    </div>