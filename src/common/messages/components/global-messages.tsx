import { selectGlobalMessages } from '../global-message-slice.ts';
import { useAppSelector } from '../../../hooks.ts';
import { Message } from './global-message.tsx';
import { MessageType } from '../models/message-type.ts';

export const GlobalMessages = () => {
    const { errors, success } = useAppSelector(selectGlobalMessages)

    return (
        <div className="max-w-4xl w-full">
            { errors.map(error => <Message key={ error } message={ error } type={ MessageType.ERROR }/>) }
            { success && <Message message={ success } type={ MessageType.SUCCESS }/> }
        </div>
    )
}