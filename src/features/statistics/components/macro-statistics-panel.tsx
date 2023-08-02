import { Panel } from '../../../common/panel.tsx';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { Bar, BarChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ValueObject } from '../../../redux/models/value-object.ts';

interface MacroStatisticsPanelProps {
    data: {
        date: string
        protein: ValueObject
        carbohydrates: ValueObject
        fats: ValueObject
    }[]
    isLoading?: boolean
}

export const MacroStatisticsPanel = ({ data, isLoading }: MacroStatisticsPanelProps) => {
    const chartData = data.map(it => (
        {
            date: new Date(it.date).toLocaleDateString(),
            protein: it.protein.value,
            carbohydrates: it.carbohydrates.value,
            fats: it.fats.value,
            recommendedProtein: it.protein.total,
            recommendedCarbohydrates: it.carbohydrates.total,
            recommendedFats: it.fats.total,
        }
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
                                <Bar type="monotone" dataKey="protein" fill="#F6AB95" radius={[8, 8, 0, 0]}/>
                                <Bar type="monotone" dataKey="carbohydrates" fill="#CCDEC0" radius={[8, 8, 0, 0]}/>
                                <Bar type="monotone" dataKey="fats" fill="#FCC984" radius={[8, 8, 0, 0]}/>

                                <ReferenceLine y={ data[0].protein.total } stroke="#F6AB95" strokeDasharray="3 3"/>
                                <ReferenceLine y={ data[0].carbohydrates.total } stroke="#CCDEC0" strokeDasharray="3 3"/>
                                <ReferenceLine y={ data[0].fats.total } stroke="#FCC984" strokeDasharray="3 3"/>
                                <XAxis dataKey="date"/>
                                <YAxis/>
                                <Tooltip/>
                            </BarChart>
                        </ResponsiveContainer>
                }
            </Panel>
        </div>
    )
}