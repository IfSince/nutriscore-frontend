import { ButtonProps } from './button-props.ts';

interface IconButtonProps extends ButtonProps {
    icon: string
}

export const IconButton = ({ icon, level = 'secondary', action }: IconButtonProps) => {
    const primaryStyles = 'text-gray-50 bg-cyan-200 hover:bg-cyan-300'
    const secondaryStyles = 'text-gray-500 bg-gray-200 hover:text-gray-600 hover:bg-gray-300'
    return (
        <button
            onClick={ action }
            className={ `flex aspect-square h-10 lg:h-12 items-center justify-center rounded-md transition-colors
                        ${ level === 'primary' ? primaryStyles : secondaryStyles }` }>
            <span className="text-xl material-icons-round">{ icon }</span>
        </button>
    );
}