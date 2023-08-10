import { BmiPanel } from '../components/bmi-panel.tsx';
import { RmrPanel } from '../components/rmr-panel.tsx';
import { Panel } from '../../../common/panel.tsx';
import { Header } from '../../../common/header.tsx';

export const ProfileOverviewView = () => {
    return (
        <>
            <Header title="Your Profile"/>
            <div className="w-full">
                {/*<ApiErrorMessage apiErrorResponse={ error }/>*/ }
                <div className="relative flex flex-wrap lg:flex-row">
                    {/*<BlurOverlay visible={ isLoading || isError }/>*/ }
                    <div className="flex-layout-row">
                        <BmiPanel isLoading={ false }/>
                        <RmrPanel isLoading={ false }/>
                    </div>
                    <div className="mt-5 flex-layout-row lg:mt-10">
                        <Panel className="grow">
                            <div>test</div>
                        </Panel>
                    </div>
                </div>
            </div>
        </>

    )
}