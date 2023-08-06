import { useAppDispatch, useAppSelector } from '../../../redux/hooks.ts';
import { clearErrorMessage, clearSuccessMessage, selectGlobalMessages } from '../global-message-slice.ts';

export const GlobalMessages = () => {
    const dispatch = useAppDispatch()
    const { errors, success } = useAppSelector(selectGlobalMessages)

    return (
        <>
            {
                errors.map(error => (
                    <div className="mb-4 flex items-center rounded-lg border-2 p-4 text-error-800 bg-error border-error animate-fade-out"
                         key={ error }
                         onAnimationEnd={ () => dispatch(clearErrorMessage(error)) }>
                        <div className="ml-3 text-base font-medium">{ error }</div>
                    </div>
                ))
            }

            {
                success &&
                <div className="mb-4 flex items-center rounded-lg border-2 p-4 text-success-800 bg-success border-success animate-fade-out"
                     onAnimationEnd={ () => dispatch(clearSuccessMessage()) }>
                    <div className="ml-3 text-base font-medium">{ success }</div>
                </div>
            }
        </>
    )
}