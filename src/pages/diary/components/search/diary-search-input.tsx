import { useNavigate } from 'react-router-dom';
import { DefaultButton } from '../../../../common/button/components/default-button.tsx';
import { DIARY_NEW_FOOD_ITEM_ROUTE } from '../../../../routes.ts';
import { PrimaryButton } from '../../../../common/button/components/primary-button.tsx';
import { SearchInput } from '../../../../common/form/components/search-input/search-input.tsx';

interface DiarySearchInputProps {
    filterText: string
    onFilterTextChange: (value: string) => void
}

export const DiarySearchInput = ({ filterText, onFilterTextChange }: DiarySearchInputProps) => {
    const navigate = useNavigate()

    return (
        <div className="flex w-full items-center">
            <SearchInput filterText={ filterText } onFilterTextChange={ onFilterTextChange }/>

            <DefaultButton className="ml-2 aspect-square text-gray-50 md:ml-4 md:aspect-auto md:px-4"
                           action={ () => navigate(DIARY_NEW_FOOD_ITEM_ROUTE) }>
                <span className="text-2xl material-icons-round">add</span>
                <span className="hidden whitespace-nowrap px-2 text-base font-medium tracking-wide md:inline">New entry</span>
            </DefaultButton>

            <PrimaryButton className="ml-2 aspect-square text-gray-50 md:ml-4 md:aspect-auto md:px-4">
                <span className="text-lg material-icons-round">qr_code_scanner</span>
                <span className="hidden whitespace-nowrap px-2 text-base font-medium tracking-wide md:inline">Scan code</span>
            </PrimaryButton>
        </div>
    )
}