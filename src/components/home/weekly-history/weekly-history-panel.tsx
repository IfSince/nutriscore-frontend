import { Panel } from '../../common/panel.tsx';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { WeeklyHistoryPanelProps } from './weekly-history-panel-props.ts';

export const WeeklyHistoryPanel = ({ data }: { data: WeeklyHistoryPanelProps[] }) => {
    return (
        <div className={ 'w-full h-full min-h-[400px] relative' }>
            <Panel className={ 'w-full h-full absolute' }>
                <h3 className="text-lg font-bold text-gray-600 lg:text-xl">Week History</h3>
                <ResponsiveContainer>
                    <LineChart data={ data } margin={ { top: 10, right: 10, bottom: 0, left: 10 } }>
                        <Line type="monotone" dataKey="uv" stroke="#BCF0DA" strokeWidth={ 3 }/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                    </LineChart>
                </ResponsiveContainer>
            </Panel>
        </div>
    )
}