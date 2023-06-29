import { ButtonProps } from '../models/button-props.ts';

interface IconButtonProps extends ButtonProps {
    icon: string
    iconSize?: string
}

export const IconButton = ({ icon, iconSize = '', size = 'medium', level = 'secondary', action }: IconButtonProps) => {
    const height = size == 'medium' ? 'h-10 lg:h-12' : 'h-8 lg:h-10'

    let styles;
    switch (level) {
        case 'primary':
            styles = 'text-gray-50 bg-cyan-200 hover:bg-cyan-300'
            break
        case 'secondary':
            styles = 'text-gray-500 bg-gray-200 hover:text-gray-600 hover:bg-gray-300'
            break
        case 'delete':
            styles = 'text-gray-50 bg-red hover:bg-red-600'
            break
    }


    return (
        <button
            onClick={ action }
            className={ `flex aspect-square ${ height } ${ styles } items-center justify-center rounded-md transition-colors` }>
            <span className={ `${ iconSize ? iconSize : 'text-xl' } material-icons-round` }>{ icon }</span>
        </button>
    );
}