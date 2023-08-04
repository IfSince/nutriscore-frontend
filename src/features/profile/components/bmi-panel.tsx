import { Panel } from '../../../common/panel.tsx';
import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { Line, LineChart, ResponsiveContainer } from 'recharts';

export const BmiPanel = ({ isLoading }: { isLoading: boolean }) => {
    const data = [
        { value: 25 },
        { value: 16 },
        { value: 14 },
        { value: 22 },
        { value: 33 },
        { value: 35 },
        { value: 25.46 },
    ]
    return (
        <Panel className="w-full grow !p-0 md:w-auto lg:!p-0" highlighted>
            {
                isLoading && <CenteredSpinner className="absolute top-1/2 left-0 -translate-y-1/2"
                                              backgroundClr="text-gray-50/80"
                                              fill="fill-gray-600/80"
                                              size="lg"/>
            }
            <div className="flex flex-row lg:flex-col">
                <div className="flex w-fit flex-row p-4 pr-0 lg:px-11 lg:py-12">
                    <span className="text-4xl font-bold lg:text-6xl">25,46</span>
                    <span className="pl-2 font-medium pb-0.5 lg:pl-3 lg:text-xl">BMI</span>
                </div>
                <div className="relative h-[100px] w-full grow">
                    <div className="absolute h-[60px] w-full left-0 bottom-0 lg:top-0">
                        <ResponsiveContainer>
                            <LineChart data={ data }>
                                <Line type="natural"
                                      dataKey="value"
                                      dot={{ fill: '#1F2937' }}
                                      stroke="#1F2937"
                                      strokeWidth={ 3 }/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </Panel>
    )
}