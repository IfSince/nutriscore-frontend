import { DIARY_SEARCH_ROUTE } from '../../../routes.ts';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { QuickActionsItem } from './quick-actions-item.tsx';

export const QuickActions = () => {
    const [actionsOpened, setActionsOpened] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="fixed right-4 bottom-24 z-[100] lg:hidden">
            <div className={ `flex-col items-center mb-4 space-y-2 ${ actionsOpened ? 'flex' : 'hidden' }` }>
                <QuickActionsItem description="Weight" action={ () => navigate('') } icon="add"/>
                <QuickActionsItem description="Recording" action={ () => navigate(DIARY_SEARCH_ROUTE) } icon="add"/>
            </div>

            <button
                className="flex items-center justify-center text-gray-50 bg-cyan-200 rounded-lg w-12 md:w-14 aspect-square transition-colors ring-8 ring-white hover:bg-cyan-300"
                type="button"
                onClick={ () => setActionsOpened((curr) => !curr) }>
                <span className="material-icons-round text-xl md:text-3xl">add</span>
            </button>
        </div>
    )
}
