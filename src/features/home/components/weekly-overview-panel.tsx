import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Panel } from '../../../common/panel.tsx';
import { WeightRecording } from '../../weight-recording/models/weight-recording.ts';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';

export const WeeklyOverviewPanel = ({ weightRecordings, isLoading }: { weightRecordings?: WeightRecording[], isLoading?: boolean }) => {
    const data = weightRecordings?.map(weightRecording => (
        { day: weightRecording.dateOfRecording, value: weightRecording.weight }
    ))
    return (
        <div className="relative w-full grow min-h-[200px] md:min-h-[400px] md:min-w-[450px] md:w-auto">
            <Panel className="absolute h-full w-full" title="Weekly Overview">
                {
                    isLoading && <CenteredSpinner className="absolute top-1/2 left-0 -translate-y-1/2"
                                                  backgroundClr="text-gray-100"
                                                  fill="fill-cyan-300"
                                                  size="lg"/>
                }
                <ResponsiveContainer>
                    <LineChart data={ data }>
                        <Line type="monotone" dataKey="value" stroke="#BCF0DA" strokeWidth={ 3 }/>
                        <XAxis dataKey="day"/>
                        <YAxis/>
                        <Tooltip/>
                    </LineChart>
                </ResponsiveContainer>
            </Panel>
        </div>
    )
}