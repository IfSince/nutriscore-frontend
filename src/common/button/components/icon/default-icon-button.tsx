import { IconButtonProps } from '../../models/icon-button-props.ts';
import { DefaultButton } from '../default-button.tsx';

export const DefaultIconButton = ({ type, icon, action, className = '' }: IconButtonProps) =>
    <DefaultButton type={ type }
                   action={ action }
                   className={ `aspect-square group ${ className }` }>
        <span className="text-xl material-icons-round">{ icon }</span>
    </DefaultButton>