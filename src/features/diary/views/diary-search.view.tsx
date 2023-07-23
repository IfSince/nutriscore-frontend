import { DesktopPanel } from '../../../common/desktop-panel.tsx';
import { DiarySearchInput } from '../components/search/diary-search-input.tsx';
import { DiarySearchList } from '../components/search/diary-search-list.tsx';
import { ReactElement, useState } from 'react';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { useGetFoodItemsQuery } from '../../food/food-items-api-slice.ts';

export const DiarySearchView = () => {
    const [filterText, setFilterText] = useState('')

    const {
        data: foodItems,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetFoodItemsQuery()

    let content: ReactElement = <></>
    if (isLoading) {
        content = <CenteredSpinner/>
    } else if (isError) {
        console.log(error)
        content = <div>{ error.toString() }</div>
    } else if (isSuccess) {
        content = <DiarySearchList data={ foodItems } filterText={ filterText }/>
    }

    return (
        <DesktopPanel title="Search">
            <DiarySearchInput filterText={ filterText } onFilterTextChange={ setFilterText }/>

            <div className="mb-4 border-t-2 border-gray-100 mt-3.5 sm:mt-4 sm:mb-5 lg:mt-5 lg:mb-6"></div>

            <div className={ 'flex flex-col gap-y-2 pb-6 sm:pb-10 xl:pb-14' }>
                { content }
            </div>
        </DesktopPanel>
    )

}

