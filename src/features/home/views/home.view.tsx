import { WeeklyOverviewPanel } from '../components/weekly-overview-panel.tsx';
import { MealPanelList } from '../components/meal-panel-list.tsx';
import { CaloriePanel } from '../../../common/calorie-panel/components/calorie-panel.tsx';
import { MacroPanelGroup } from '../../../common/macro-panel/components/macro-panel-group.tsx';
import { useAppSelector } from '../../../redux/hooks.ts';
import { selectUserMetadata } from '../../../redux/slices/user-metadata-slice.ts';
import { selectDate } from '../../../redux/slices/date-slice.ts';
import { ValueObject } from '../../../redux/models/value-object.ts';

export const HomeView = () => {
    const date = new Date(useAppSelector(selectDate))
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
        <div className="flex-layout-row">
            <CaloriePanel data={ {
                size: 200,
                width: 15,
                valueObject: totalCaloriesValueObject,
                trackStyles: 'stroke-white',
                indicatorStyles: 'stroke-gray-600',
            } }/>

            <MacroPanelGroup
                protein={ { size: 160, width: 13, valueObject: metadataByDate.protein, indicatorStyles: 'stroke-red bg-red' } }
                carbs={ { size: 160, width: 13, valueObject: metadataByDate.carbohydrates, indicatorStyles: 'stroke-green bg-green' } }
                fats={ { size: 160, width: 13, valueObject: metadataByDate.carbohydrates, indicatorStyles: 'stroke-yellow bg-yellow' } }
                water={ { size: 160, width: 13, valueObject: metadataByDate.carbohydrates, indicatorStyles: 'stroke-blue bg-blue' } }/>
        </div>

        <div className="flex-layout-row">
            <WeeklyOverviewPanel data={ weightRecordings }/>
            <MealPanelList
                breakfast={ { size: 75, width: 12, valueObject: metadataByDate.calories.breakfast, indicatorStyles: 'stroke-cyan-200' } }
                lunch={ { size: 75, width: 12, valueObject: metadataByDate.calories.lunch, indicatorStyles: 'stroke-cyan-200' } }
                dinner={ { size: 75, width: 12, valueObject: metadataByDate.calories.dinner, indicatorStyles: 'stroke-cyan-200' } }
                snacks={ { size: 75, width: 12, valueObject: metadataByDate.calories.snacks, indicatorStyles: 'stroke-cyan-200' } }/>
        </div>
    </>;
}