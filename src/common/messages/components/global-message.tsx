import { clearSuccessMessage } from '../global-message-slice.ts';
import { useAppDispatch } from '../../../hooks.ts';
import { MessageType } from '../models/message-type.ts';

export const Message = ({ message, type }: { message: string, type: MessageType }) => {
    const dispatch = useAppDispatch()

    const styles: Record<MessageType, string> = {
        [MessageType.SUCCESS]: 'text-success bg-success-100 border-success ',
        [MessageType.ERROR]: 'text-error bg-error-100 border-error',
    }

    return (
        <div className={ `mb-4 flex items-center rounded-md p-4 lg:py-6 border-l-[6px] font-medium animate-fade-out ${ styles[type] }` }
             onAnimationEnd={ () => dispatch(clearSuccessMessage()) }>
            <span className="material-icons-round mr-4 text-2xl leading-none font-bold">{ type === MessageType.SUCCESS ? 'check' : 'close' }</span>
            <span className="text-sm md:text-base">{ message }</span>
        </div>
    );
}