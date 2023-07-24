import { WeeklyOverviewPanel } from '../components/weekly-overview-panel.tsx';
import { MealPanelList } from '../components/meal-panel-list.tsx';
import { CaloriePanel } from '../../../common/calorie-panel/components/calorie-panel.tsx';
import { MacroPanelGroup } from '../../../common/macro-panel/components/macro-panel-group.tsx';
import { useAppSelector } from '../../../redux/hooks.ts';
import { selectUserMetadata } from '../../../redux/slices/user-metadata-slice.ts';
import { selectDate } from '../../../redux/slices/date-slice.ts';
import { ValueObject } from '../../../redux/models/value-object.ts';
import { getLoggedUser } from '../../user/get-logged-user.ts';
import { useGetUserByIdQuery, useLogoutMutation } from '../../user/user-api-slice.ts';
import { PrimaryButton } from '../../../common/button/components/primary-button.tsx';

export const HomeView = () => {
    const date = new Date(useAppSelector(selectDate))
    const user = getLoggedUser()

    const [logout] = useLogoutMutation()

    // const {
    //     data: nutritionalMetaData,
    //     isLoading,
    //     isSuccess,
    //     isError,
    //     error
    // } = useGetNutritionalMetadataByUserIdQuery(user.id)

    const metadata = useAppSelector(selectUserMetadata)
    const metadataByDate = metadata[date.getFullYear()][date.getMonth() + 1].data[date.getDate()]
    const weightRecordings = metadata[date.getFullYear()][date.getMonth() + 1].weightRecordings

    const totalCaloriesValueObject =
        Object
            .values(metadataByDate.calories)
            .reduce((prev: ValueObject, curr: ValueObject): ValueObject => (
                {
                    value: prev.value + curr.value,
                    total: prev.total + curr.total,
                }
            ), { value: 0, total: 0 })

    return <>
        <PrimaryButton action={logout}>Logout</PrimaryButton>
        <div className="flex-layout-row">
            <CaloriePanel valueObject={ totalCaloriesValueObject }/>
            <MacroPanelGroup protein={ metadataByDate.protein }
                             carbs={ metadataByDate.carbohydrates }
                             fats={ metadataByDate.fats }
                             water={ metadataByDate.water }/>
        </div>

        <div className="flex-layout-row">
            <WeeklyOverviewPanel data={ weightRecordings }/>
            <MealPanelList breakfast={ metadataByDate.calories.breakfast }
                           lunch={ metadataByDate.calories.lunch }
                           dinner={ metadataByDate.calories.dinner }
                           snacks={ metadataByDate.calories.snacks }/>
        </div>
    </>;
}