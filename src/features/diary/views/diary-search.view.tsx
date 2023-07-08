import { DesktopPanel } from '../../../common/desktop-panel.tsx';
import { DiarySearchInput } from '../components/search/diary-search-input.tsx';
import { DiarySearchList } from '../components/search/diary-search-list.tsx';
import { useState } from 'react';
import { useAppSelector } from '../../../redux/hooks.ts';
import { selectFoodItems } from '../../../redux/slices/food-items-slice.ts';

export const DiarySearchView = () => {
    const foodItems = useAppSelector(selectFoodItems)
    const [filterText, setFilterText] = useState('')

    return <DesktopPanel title="Search">
        <DiarySearchInput filterText={ filterText } onFilterTextChange={ setFilterText }/>

        <div className="mb-4 border-t-2 border-gray-100 mt-3.5 sm:mt-4 sm:mb-5 lg:mt-5 lg:mb-6"></div>

        <div className={ 'flex flex-col gap-y-2 pb-6 sm:pb-10 xl:pb-14' }>
            <DiarySearchList data={ foodItems } filterText={ filterText }/>
        </div>
    </DesktopPanel>;
}

