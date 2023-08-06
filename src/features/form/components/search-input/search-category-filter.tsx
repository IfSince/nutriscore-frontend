import { SearchCategory } from './models/search-category.ts';

interface SearchCategoryFilterProps {
    selected: SearchCategory
    onSelectedChange: (category: SearchCategory) => void
    categories: SearchCategory[]
    className?: string
}

export const SearchCategoryFilter = ({ selected, onSelectedChange, categories, className = '' }: SearchCategoryFilterProps) => {
    return (
        <ul className={ `mt-4 flex w-full gap-8 ${ className }` }>
            {
                categories.map(category => {
                    const isSelected = category.description === selected.description
                    return (
                        <li key={ category.description }>
                            <button className="flex flex-col items-center gap-1"
                                    onClick={ () => onSelectedChange(category) }>
                                <span className={ `${ isSelected && 'font-medium' }` }>{ category.description }</span>
                                { isSelected && <div className="h-1 w-1 rounded-full bg-gray-600"></div> }
                            </button>
                        </li>
                    );
                })
            }
        </ul>
    )
}