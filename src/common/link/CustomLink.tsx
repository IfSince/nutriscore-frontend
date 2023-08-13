import { Link } from 'react-router-dom';

export const CustomLink = ({
    to,
    text,
    className = '',
}: { to: string, text: string, className?: string }) => {
    return (
        <Link to={ to } className={ `ml-1 font-medium text-cyan-300 transition-colors hover:text-cyan-400 hover:underline ${ className }` }>{ text }</Link>
    )
}