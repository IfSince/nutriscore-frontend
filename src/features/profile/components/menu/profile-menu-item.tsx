import { useMatch, useNavigate } from 'react-router-dom';

export const ProfileMenuItem = ({
    link,
    description,
    toggleOpened,
}: {
    link: string,
    description: string,
    toggleOpened: (value: boolean) => void
}) => {
    const navigate = useNavigate()
    const isMatch = !!useMatch(link)

    const onRoute = () => {
        navigate(link)
        toggleOpened(false)
    }

    return (
        <li>
            <button className={ `flex w-fit items-center py-2 pr-6 hover:font-bold group ${ isMatch && 'font-bold' }` } onClick={ onRoute }>
                <div className="aspect-square rounded-full bg-gray-600 transition-all duration-300 h-1"></div>
                <span className={ `transition-transform ease-out duration-300 bg-cyan-50 ${ isMatch ? 'translate-x-2' : 'group-hover:translate-x-2 -translate-x-1'}` }>
                    { description }
                </span>
            </button>
        </li>
    )
}