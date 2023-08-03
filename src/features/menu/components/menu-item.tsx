import { Link, useMatch, useMatches } from 'react-router-dom';
import { MenuItemInterface } from '../model/menu-items.ts';
import { useEffect, useState } from 'react';

export const MenuItem = (item: MenuItemInterface) => {
    const isMatch = useMatch(item.link)
    const matches = useMatches()
    const [isOpen, setIsOpen] = useState<boolean>()

    useEffect(() => {
        setIsOpen(!!isMatch || item.children?.some(child => matches.some(match => match.pathname === child.link)))
    }, [setIsOpen, isMatch, item.children, matches])

    const renderMenuItem = (item: MenuItemInterface, key?: string) => {
        const isExactMatch = matches.filter(it => it.pathname === item.link).length > 0

        return (
            <li className="flex w-full flex-col max-w-xxs lg:max-w-full" key={ key }>
                <div className="flex grow justify-center lg:justify-between">
                    <Link to={ item.link } className={ `flex justify-center grow lg:justify-between p-1 lg:pr-2 transition-colors font-medium group tracking-tight
                               ${ isExactMatch ? 'text-gray-600 font-bold hover:text-gray-600' : 'text-gray-500 hover:text-gray-600' }` }>
                        <div className="flex flex-col-reverse items-center lg:flex-row lg:pr-6">
                            <div className={ `rounded-full w-2 h-2 bg-gray-600 lg:mr-3 transition-all duration-300 
                                     ${ !isExactMatch &&
                            '-translate-y-6 lg:translate-y-0 lg:translate-x-8 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100' }`
                            }></div>
                            <span className="z-10 bg-white text-4xl material-icons-round">{ item.icon }</span>
                            <span className="hidden text-lg capitalize ml-3.5 lg:block">{ item.name }</span>
                        </div>
                    </Link>
                    {
                        item.children &&
                        <button className={ `hidden material-icons-round lg:block text-4xl transition-transform delay-100
                                             ${ isOpen ? 'hover:rotate-0 -rotate-90' : 'hover:-rotate-90' }` }
                                onClick={ () => setIsOpen((curr) => !curr) }>arrow_left</button>
                    }
                </div>
                {
                    item.children &&
                    <ul className={ `mt-2 hidden lg:flex flex-col lg:ml-8 transition-[max-height] duration-700
                                    ${ isOpen ? 'visible' : 'invisible pointer-events-none' }` }>
                        {
                            item.children?.map(childItem => renderMenuItem(childItem, `${ childItem.name }${ childItem.link }`))
                        }
                    </ul>
                }
            </li>
        );
    }

    return renderMenuItem(item)

}