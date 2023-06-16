import { Panel } from '../../common/panel.tsx';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    { 'name': 'Monday', 'uv': 4000, 'pv': 2400, 'amt': 2400 },
    { 'name': 'Tuesday', 'uv': 2000, 'pv': 9800, 'amt': 2290 },
    { 'name': 'Wednesday', 'uv': 3000, 'pv': 1398, 'amt': 2210 },
    { 'name': 'Thursday', 'uv': 2780, 'pv': 3908, 'amt': 2000 },
    { 'name': 'Friday', 'uv': 1890, 'pv': 4800, 'amt': 2181 },
    { 'name': 'Saturday', 'uv': 2390, 'pv': 3800, 'amt': 2500 },
    { 'name': 'Sunday', 'uv': 3490, 'pv': 4300, 'amt': 2100 },
]

export const WeeklyHistoryPanel = () => {
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