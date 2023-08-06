import { getInputStyles } from '../../get-input-styles.ts';

interface SearchInputProps {
    filterText: string
    onFilterTextChange: (value: string) => void
}

export const SearchInput = ({ filterText, onFilterTextChange }: SearchInputProps) => {
    return (
        <>
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 md:pl-4">
                    <span className="text-gray-400 material-icons-round">search</span>
                </div>
                <input className={ getInputStyles(false, true) }
                       type="text"
                       id="search"
                       value={ filterText }
                       onChange={ (e) => onFilterTextChange(e.target.value) }/>
            </div>
        </>
    )
}