import { DIARY_NEW_FOOD_ITEM_ROUTE, DIARY_SEARCH_ROUTE, PROFILE_ADD_WEIGHT_RECORDING_ROUTE, PROFILE_NEW_MEAL_DETAIL_ROUTE } from '../../../routes.ts';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { QuickActionsItem } from './quick-actions-item.tsx';

export const QuickActions = () => {
    const [actionsOpened, setActionsOpened] = useState(false)
    const navigate = useNavigate()

    return (
        <>
            { actionsOpened && <div className="fixed opacity-70 lg:opacity-80 bg-white top-0 right-0 w-screen h-screen z-50"></div> }
            <div className="fixed right-4 bottom-24 z-[100] lg:right-10">
                <div className={ `flex-col items-center mb-4 space-y-2 ${ actionsOpened ? 'flex' : 'hidden' }` }>
                    <QuickActionsItem description="Weight Recording" action={ () => navigate(PROFILE_ADD_WEIGHT_RECORDING_ROUTE) } icon="add"/>
                    <QuickActionsItem description="Nutritional Recording" action={ () => navigate(DIARY_SEARCH_ROUTE) } icon="add"/>
                    <QuickActionsItem description="Meal Item" action={ () => navigate(PROFILE_NEW_MEAL_DETAIL_ROUTE) } icon="add"/>
                    <QuickActionsItem description="Food Item" action={ () => navigate(DIARY_NEW_FOOD_ITEM_ROUTE) } icon="add"/>
                </div>

                <button
                    className="flex items-center justify-center text-gray-50 bg-cyan-200 rounded-lg w-12 md:w-14 aspect-square transition-colors ring-8 ring-white hover:bg-cyan-300"
                    type="button"
                    onClick={ () => setActionsOpened((curr) => !curr) }>
                    <span className="material-icons-round text-xl md:text-3xl">add</span>
                </button>
            </div>
        </>
    )
}
