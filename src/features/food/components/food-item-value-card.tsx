interface FoodItemValueCardProps {
    description: string
    value: number | string
    unit: string
    color: string
}

export const FoodItemValueCard = ({ description, value, unit, color }: FoodItemValueCardProps) =>
    <div className="grow rounded-2xl border border-gray-200 p-4">
        <span className="mb-4 block font-medium text-gray-600">{ description }</span>
        <div className="flex items-center">
            <div className="relative flex w-3 flex-col overflow-hidden rounded-full h-18">
                <span className={ `absolute right-0 bottom-0 h-full w-full opacity-30 ${ color }` }></span>
                <span className={ `absolute right-0 bottom-0 h-2/4 w-full ${ color }` }></span>
            </div>

            <div className="ml-6 flex flex-col">
                <span className="text-2xl font-medium text-gray-600">{ value }</span>
                <span className="text-gray-500">{ unit }</span>
            </div>
        </div>
    </div>