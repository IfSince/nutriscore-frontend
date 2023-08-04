import { Panel } from '../../../common/panel.tsx';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { Bar, BarChart, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { ValueObject } from '../../../redux/models/value-object.ts';

interface CalorieStatisticsPanelProps {
    data: {
        date: string
        valueObject: ValueObject
    }[]
    isLoading?: boolean
}

export const CalorieStatisticsPanel = ({ data, isLoading }: CalorieStatisticsPanelProps) => {
    const chartData = data.map(it => (
        { date: new Date(it.date).toLocaleDateString(), value: it.valueObject.value }
    ))

    return (
        <div className="relative w-full grow min-h-[200px] md:min-h-[400px] md:min-w-[450px] md:w-auto">
            <Panel className="absolute h-full w-full" title="Calorie Intake">
                {
                    isLoading
                        ? <CenteredSpinner className="absolute top-1/2 left-0 -translate-y-1/2"
                                           backgroundClr="text-gray-100"
                                           fill="fill-cyan-300"
                                           size="lg"/>
                        : <ResponsiveContainer>
                            <BarChart data={ chartData }>
                                <Bar dataKey="value" fill="#BCF0DA" radius={[10, 10, 0, 0]}/>
                                { data.length > 0 && <ReferenceLine y={ data[0].valueObject.total } stroke="#BCF0DA" strokeDasharray="3 3"/> }
                                <XAxis dataKey="date"/>
                                <YAxis/>
                            </BarChart>
                        </ResponsiveContainer>
                }
            </Panel>
        </div>
    )
}