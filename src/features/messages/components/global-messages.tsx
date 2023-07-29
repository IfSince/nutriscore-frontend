import { useAppDispatch, useAppSelector } from '../../../redux/hooks.ts';
import { clearErrorMessage, clearSuccessMessage, selectGlobalMessages } from '../global-message-slice.ts';

export const GlobalMessages = () => {
    const dispatch = useAppDispatch()
    const { errors, success } = useAppSelector(selectGlobalMessages)

    return (
        <>
            {
                errors.map(error => (
                    <div className="flex items-center p-4 mb-4 text-error-800 rounded-lg bg-error/40 border-2 border-error/50" key={ error }>
                        <div className="ml-3 text-base font-medium">{ error }</div>
                        <button onClick={ () => dispatch(clearErrorMessage(error)) }
                                type="button"
                                className="ml-auto -mx-1.5 -my-1.5 bg-error/10 text-error-800 rounded-lg inline-flex items-center justify-center h-8 w-8 p-1.5
                                           focus:ring-2 focus:ring-error hover:bg-error/50">
                            <span className="material-icons-round">close</span>
                        </button>
                    </div>
                ))
            }
            {
                success &&
                <div className="flex items-center p-4 mb-4 text-success-800 rounded-lg bg-success/40 border-2 border-success/50">
                    <div className="ml-3 text-base font-medium">{ success }</div>
                    <button onClick={ () => dispatch(clearSuccessMessage()) }
                            type="button"
                            className="ml-auto -mx-1.5 -my-1.5 text-success-800 rounded-lg inline-flex items-center justify-center h-8 w-8 p-1.5
                                       focus:ring-2 focus:ring-success hover:bg-success/50">
                        <span className="material-icons-round">close</span>
                    </button>
                </div>
            }
        </>


    )
}