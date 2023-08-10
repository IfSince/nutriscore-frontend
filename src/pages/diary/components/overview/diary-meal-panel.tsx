import { useNavigate } from 'react-router-dom';
import { ProgressCircle } from '../../../../common/progress/components/progress-circle.tsx';
import { PrimaryIconButton } from '../../../../common/button/components/icon/primary-icon-button.tsx';
import { DIARY_SEARCH_ROUTE } from '../../../../routes.ts';
import { DesktopPanel } from '../../../../common/desktop-panel.tsx';
import { ValueObject } from '../../../../common/value-object.ts';
import { NutritionalRecording } from '../../../../features/nutritional-recordings/models/nutritional-recordings-by-date.ts';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useRef, useState } from 'react';
import { CellClickedEvent, GridOptions } from 'ag-grid-community';

export interface MealOverviewProps {
    name: string
    valueObject: ValueObject
    items: NutritionalRecording[]
    isLoading: boolean
}

export const DiaryMealPanel = ({ name, valueObject, items, isLoading }: MealOverviewProps) => {
    const navigate = useNavigate()

    const gridRef = useRef<AgGridReact<NutritionalRecording>>(null); // Optional - for accessing Grid's API
    const [rowData, setRowData] = useState<NutritionalRecording[]>(); // Set rowData to Array of Objects, one Object per Row

    useEffect(() => setRowData(items), [items]);

    const gridOptions: GridOptions<NutritionalRecording> = {
        rowData,
        columnDefs: [
            { field: 'description', filter: true },
            { field: 'type', filter: true },
            { field: 'amount', filter: true },
            { field: 'unit', filter: true },
            { field: 'calories', filter: true },
            { field: 'protein', filter: true },
            { field: 'carbohydrates', filter: true },
            { field: 'fats', filter: true },
        ],
        defaultColDef: {
            sortable: true,
            autoHeight: true,
        },
        getRowId: (params) => params.data.id.toString(),
        onRowSelected: (event) => {
            if (event.data) {
                console.log(event.data)
            }
        },
        onCellClicked: (event: CellClickedEvent<NutritionalRecording>) => console.log('cellclicked', event),

        domLayout: 'autoHeight',
        animateRows: true,
    }


    return (
        <DesktopPanel className="flex flex-col gap-4 xl:gap-x-8 xl:gap-y-6">
            <div className="flex flex-row items-center justify-between">
                <div className="flex items-center">
                    <ProgressCircle size={ 70 }
                                    width={ 10 }
                                    valueObject={ valueObject }
                                    indicatorStyles="stroke-cyan-200"
                                    isLoading={ isLoading }/>
                    <h3 className="ml-4 text-xl font-medium text-gray-600 lg:ml-8 lg:text-2xl">{ name }</h3>
                </div>
                <PrimaryIconButton action={ () => navigate(DIARY_SEARCH_ROUTE) } icon="add"/>
            </div>

            <div className="ag-theme-alpine" style={ { width: '100%' } }>

                <AgGridReact<NutritionalRecording>
                    gridOptions={ gridOptions }
                    ref={ gridRef }
                    rowData={ rowData }/>
            </div>

            {/*<NutritionalRecordingsList items={ items } isLoading={ isLoading }/>*/ }
        </DesktopPanel>
    )
}
