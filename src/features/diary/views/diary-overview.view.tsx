// const diaryData: MealOverviewProps[] = [
//     {
//         name: 'Breakfast',
//         valueObject: { value: 100, total: 200 },
//         items: [
//             {
//                 name: 'Espresso coffee',
//                 valueObject: { value: 100, total: 200 },
//                 amount: '100 kcal',
//                 calories: '100 kcal',
//                 protein: '21g',
//                 carbs: '36g',
//                 fats: '15g',
//             },
//             {
//                 name: 'Apple',
//                 valueObject: { value: 100, total: 200 },
//                 amount: '100 kcal',
//                 calories: '100 kcal',
//                 protein: '21g',
//                 carbs: '36g',
//                 fats: '15g',
//             },
//         ],
//     },
//     {
//         name: 'Lunch',
//         valueObject: { value: 100, total: 200 },
//         items: [
//             {
//                 name: 'Espresso coffee',
//                 valueObject: { value: 100, total: 200 },
//                 amount: '100 kcal',
//                 calories: '100 kcal',
//                 protein: '21g',
//                 carbs: '36g',
//                 fats: '15g',
//             },
//         ],
//     },
//     {
//         name: 'Dinner',
//         valueObject: { value: 100, total: 200 },
//         items: [
//             {
//                 name: 'Espresso coffee',
//                 valueObject: { value: 100, total: 200 },
//                 amount: '100 kcal',
//                 calories: '100 kcal',
//                 protein: '21g',
//                 carbs: '36g',
//                 fats: '15g',
//             },
//         ],
//     },
//     {
//         name: 'Snacks',
//         valueObject: { value: 100, total: 200 },
//         items: [
//             {
//                 name: 'Espresso coffee',
//                 valueObject: { value: 100, total: 200 },
//                 amount: '100 kcal',
//                 calories: '100 kcal',
//                 protein: '21g',
//                 carbs: '36g',
//                 fats: '15g',
//             },
//         ],
//     },
// ]

export const DiaryOverviewView = () => {
    // const date = new Date(useAppSelector(selectDate))

    // const metadataByDate = metadata[date.getFullYear()][date.getMonth() + 1].data[date.getDate()]
    //
    // const totalCaloriesValueObject = Object.values(metadataByDate.calories)
    //     .reduce((prev: ValueObject, curr: ValueObject): ValueObject => (
    //         {
    //             value: prev.value + curr.value,
    //             total: prev.total + curr.total,
    //         }
    //     ), { value: 0, total: 0 })
    //
    // return (
    //     <>
    //         <div className="flex-layout-row">
    //             <CaloriePanel valueObject={ totalCaloriesValueObject }/>
    //             <MacroPanelGroup protein={ metadataByDate.protein }
    //                              carbs={ metadataByDate.carbohydrates }
    //                              fats={ metadataByDate.fats }
    //                              water={ metadataByDate.water }/>
    //         </div>
    //
    //         {
    //             diaryData.map(data =>
    //                 <div key={ data.name } className="flex-layout-row">
    //                     <DiaryMealPanel name={ data.name } valueObject={ data.valueObject } items={ data.items }/>
    //                 </div>,
    //             )
    //         }
    //     </>
    // )
}