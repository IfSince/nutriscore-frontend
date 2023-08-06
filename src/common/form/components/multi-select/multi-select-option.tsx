interface MultiSelectOptionProps {
    selected?: boolean
    value: number
    displayName?: string
    icon?: string
    toggle: (value: number) => void
}

export const MultiSelectOption = ({ selected, value, displayName, icon, toggle }: MultiSelectOptionProps) => {
    return (
        <div className={ `flex flex-col items-center group cursor-pointer ${ selected ? 'text-gray-50' : 'text-gray-400' }` }
             onClick={ () => toggle(value) }>
            <div className={ `flex aspect-square items-center transition-colors justify-center rounded-md p-5 border group-hover:border-cyan-200
                              ${ selected && 'bg-cyan-200 border-cyan-200' }` }>
                <span className="text-4xl material-icons-round">{ icon }</span>
            </div>
            <span className={ `mt-2 font-medium transition-colors ${ selected && 'text-cyan-300' }` }>{ displayName }</span>
        </div>
    )
}