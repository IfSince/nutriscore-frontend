import { IconButtonProps } from '../../models/icon-button-props.ts';
import { PrimaryButton } from '../primary-button.tsx';

export const PrimaryIconButton = ({ type, icon, action, className = '' }: IconButtonProps) =>
    <PrimaryButton type={ type }
                   action={ action }
                   className={ `aspect-square group w-fit ${ className }` }>
        <span className="text-xl material-icons-round">{ icon }</span>
    </PrimaryButton>