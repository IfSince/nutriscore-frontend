import { NutritionalRecordingSearchEntry } from '../models/nutritional-recordings-search-entry.ts';
import { DIARY_ADD_FOOD_ITEM_ROUTE, DIARY_ADD_MEAL_ITEM_ROUTE } from '../../../../routes.ts';
import { Link } from 'react-router-dom';
import { Unit, UNIT_ABBREVIATIONS } from '../../../unit.ts';

export const NutritionalRecordingSearchListItem = ({
    id,
    type,
    description,
    amount,
    unit,
    calories,
    protein,
    carbohydrates,
    fats,
}: NutritionalRecordingSearchEntry) => {
    const routes = {
        ['FOOD']: DIARY_ADD_FOOD_ITEM_ROUTE.replace(':id', id.toString()),
        ['MEAL']: DIARY_ADD_MEAL_ITEM_ROUTE.replace(':id', id.toString()),
    }

    return (
        <li className="h-28 rounded-md border border-gray-300 transition-colors hover:bg-gray-50 md:h-32">
            <Link className="flex h-full flex-row items-center gap-6 p-4 md:p-5"
                  to={ routes[type] }>
                <div className="flex aspect-square h-full items-center justify-center rounded-md bg-gray-200 text-gray-400">
                    <span className="material-icons-round">image</span>
                </div>

                <div className="mb-1 flex h-full flex-col justify-between">
                    <span className="text-lg font-bold md:text-xl">{ description }</span>
                    <span className="flex flex-col">
                    <span className="text-sm leading-6">Amount</span>
                    <span className="font-bold leading-4">
                        { amount }
                        { unit !== Unit.AMOUNT && <span className="text-sm ml-0.5">{ UNIT_ABBREVIATIONS[unit] }</span> }
                    </span>
                </span>
                </div>

                <div className="ml-0 flex h-full max-w-md grow gap-6 sm:justify-between sm:gap-0 md:ml-10">
                    <span className="hidden flex-col xs:flex">
                        <span className="text-sm">Calories</span>
                        <span className="font-bold">{ calories }</span>
                    </span>

                    <span className="hidden flex-col sm:flex">
                    <span className="text-sm">Protein</span>
                    <span className="font-bold">{ protein }</span>
                </span>

                    <span className="hidden flex-col sm:flex">
                    <span className="text-sm">Carbs</span>
                    <span className="font-bold">{ carbohydrates }</span>
                </span>

                    <span className="hidden flex-col sm:flex">
                    <span className="text-sm">Fats</span>
                    <span className="font-bold">{ fats }</span>
                </span>
                </div>
            </Link>
        </li>
    )
}