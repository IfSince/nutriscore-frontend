import { ItemCategoryBadge } from './item-category-badge.tsx';
import { IconButton } from '../../../common/button/components/icon-button.tsx';
import { ReactNode } from 'react';
import { FoodItemValueCard } from './food-item-value-card.tsx';
import { DesktopPanel } from '../../../common/desktop-panel.tsx';
import { FoodItem } from '../../../redux/models/food-item.ts';

interface FoodItemProps {
    children: ReactNode
    item: FoodItem
}

export const FoodItemComponent = ({
    item: {
        description,
        calories,
        protein,
        carbohydrates,
        fats,
        categories,
        allergenics,
    },
    children,
}: FoodItemProps) =>
    <DesktopPanel>
        <div className="mt-16 mb-24 flex flex-col gap-x-12 md:mt-24 md:flex-row lg:mt-0 lg:mb-0">
            <div
                className="absolute top-0 left-0 -z-10 flex aspect-square w-full grow items-center justify-center border bg-gray-200 lg:relative lg:z-auto lg:max-w-sm lg:rounded-3xl">
                <span className="text-4xl text-gray-400 material-icons-round">image</span>
            </div>

            <div className="-mr-5 -ml-5 grow rounded-2xl bg-white px-5 py-10 lg:py-0">
                <div className="flex flex-row justify-between">
                    <div className="mb-5 flex h-fit gap-2">
                        {
                            categories.map(category => <ItemCategoryBadge key={ category.id } description={ category.description }/>)
                        }
                    </div>
                    <div>
                        <IconButton icon="favorite" action={ console.log } iconStyles="text-red group-hover:text-red-600 transition-colors"/>
                    </div>
                </div>

                <h3 className="mb-4 text-2xl font-medium text-gray-600 lg:text-3xl">{ description }</h3>
                <p className="mb-8 max-w-xl text-gray-500">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut
                    labore et
                    dolore magna aliquyam erat.</p>

                <div
                    className="mb-8 grid max-w-lg 1.5xl:max-w-3xl grid-cols-2 1.5xl:grid-cols-4 gap-4 1.5xl:gap-6 md:max-w-2xl md:grid-cols-4 lg:max-w-lg lg:grid-cols-2">
                    <FoodItemValueCard description="Calories" unit="kcal" value={ calories } color="bg-cyan-200"/>
                    <FoodItemValueCard description="Protein" unit="grams" value={ protein } color="bg-red"/>
                    <FoodItemValueCard description="Carbs" unit="grams" value={ carbohydrates } color="bg-green"/>
                    <FoodItemValueCard description="Fats" unit="grams" value={ fats } color="bg-yellow"/>
                </div>


                <h4 className="mb-4 text-xl font-medium text-gray-600">Allergenics</h4>
                <div className="mb-8 flex gap-2">
                    {
                        allergenics.map(allergenic => <ItemCategoryBadge key={ allergenic.id } description={ allergenic.description }/>)
                    }
                </div>
                { children }
            </div>
        </div>
    </DesktopPanel>