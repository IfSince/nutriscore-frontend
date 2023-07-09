import { IconButtonProps } from '../../models/icon-button-props.ts';
import { DeleteButton } from '../delete-button.tsx';

export const DeleteIconButton = ({ type, icon, action, className = '' }: IconButtonProps) =>
    <DeleteButton type={ type }
                  action={ action }
                  className={ `aspect-square group ${ className }` }>
        <span className="text-xl material-icons-round">{ icon }</span>
    </DeleteButton>