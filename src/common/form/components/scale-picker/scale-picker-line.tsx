interface ScalePickerLineProps {
    value: number
}

export const ScalePickerLine = ({ value }: ScalePickerLineProps) => {
    const getStyles = () => {
        switch (true) {
            case value % 10 === 0:
                return 'h-10 w-1 bg-cyan-200'
            case value % 5 === 0:
                return 'h-8 w-0.5 bg-cyan-200/50'
            default:
                return 'h-4 w-0.5 bg-cyan-200/50'
        }
    }

    return (
        <div className="relative flex h-24 shrink-0 items-center justify-center last-of-type:pr-1 first-of-type:pl-1 px-0.5" data-value={ value }>
            <div className={ getStyles() }></div>
            { value % 10 == 0 && <span className="absolute -bottom-4 text-sm text-gray-300">{ value }</span> }
        </div>
    )
}