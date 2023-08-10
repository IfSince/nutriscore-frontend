import { IconButtonProps } from '../../models/icon-button-props.ts';
import { DefaultButton } from '../default-button.tsx';

export const DefaultIconButton = ({ type, icon, action, className = '', iconStyles = '', disabled }: IconButtonProps) =>
    <DefaultButton type={ type }
                   action={ action }
                   disabled={ disabled }
                   className={ `aspect-square group ${ className }` }>
        <span className={ `material-icons-round ${ iconStyles || 'text-xl' }` }>{ icon }</span>
    </DefaultButton>