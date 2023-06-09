import { Link, useMatch } from 'react-router-dom';

export interface MenuItemProps {
    name: string
    link: string
    icon: string
}
export const MenuItem = ({ name, link, icon }: MenuItemProps) => {
    const isMatch = useMatch(link)
    return (
        <li className={ 'w-full flex max-w-xxs lg:max-w-full' }>
            <Link to={ link } className={ `flex flex-col-reverse lg:flex-row items-center grow p-1 lg:pr-8 transition-colors font-medium group tracking-tight
                           ${ isMatch ? 'text-gray-600 font-bold hover:text-gray-600' : 'text-gray-500 hover:text-gray-600' }` }>
                <div className={ `rounded-full w-2 h-2 bg-gray-600 lg:mr-3 transition-all duration-300 
                                 ${ !isMatch &&
                '-translate-y-6 lg:translate-y-0 lg:translate-x-8 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100' } `
                }></div>
                <span className="z-10 bg-white text-4xl material-icons-round">{ icon }</span>
                <span className="hidden text-lg capitalize ml-3.5 lg:block">{ name }</span>
            </Link>
        </li>
    );
}