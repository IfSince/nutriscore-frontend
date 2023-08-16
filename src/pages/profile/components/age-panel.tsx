import { CenteredSpinner } from '../../../common/spinner/components/centered-spinner.tsx';
import { Panel } from '../../../common/panel.tsx';

export const AgePanel = ({ isLoading }: { isLoading: boolean }) => {
    return (
        <Panel className="w-full grow !p-0 md:w-auto lg:!p-0">
            {
                isLoading && <CenteredSpinner className="absolute top-1/2 left-0 -translate-y-1/2"
                                              backgroundClr="text-gray-50/80"
                                              fill="fill-gray-600/80"
                                              size="lg"/>
            }
            <div className="flex flex-row lg:flex-col">
                <div className="flex w-fit flex-row p-4 pr-0 lg:px-11 lg:py-12">
                    <span className="text-4xl font-bold lg:text-6xl">22</span>
                    <span className="pl-2 font-medium pb-0.5 lg:pl-3 lg:text-xl">Years</span>
                </div>
            </div>

        </Panel>
    )
}
