import { IconButtonProps } from '../../models/icon-button-props.ts';
import { DeleteButton } from '../delete-button.tsx';
import { CenteredSpinner } from '../../../spinner/components/centered-spinner.tsx';

export const DeleteIconButton = ({ type, icon, action, className = '', iconStyles = '', disabled, isSubmitting }: IconButtonProps) =>
    <DeleteButton type={ type }
                  action={ action }
                  disabled={ isSubmitting || disabled }
                  className={ `aspect-square group ${ className }` }>
        {
            isSubmitting ?
                <CenteredSpinner size="sm" backgroundClr="text-gray-50" fill="fill-gray-500"/> :
                <span className={ `material-icons-round ${ iconStyles || 'text-xl' }` }>{ icon }</span>
        }
    </DeleteButton>