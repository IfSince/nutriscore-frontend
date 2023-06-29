import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Panel } from '../../../common/panel.tsx';

export interface WeeklyOverviewPanelProps {
    day: string
    value: number
}

export const WeeklyOverviewPanel = ({ data }: { data: WeeklyOverviewPanelProps[] }) =>
    <div className="relative w-full grow min-h-[200px] md:min-h-[400px] md:min-w-[450px] md:w-auto">
        <Panel className="absolute h-full w-full" title="Weekly Overview">
            <ResponsiveContainer>
                <LineChart data={ data }>
                    <Line type="monotone" dataKey="value" stroke="#BCF0DA" strokeWidth={ 3 }/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                </LineChart>
            </ResponsiveContainer>
        </Panel>
    </div>