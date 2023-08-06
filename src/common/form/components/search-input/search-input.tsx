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
                <input className="h-11 rounded-md border transition-selection px-4 pl-11 md:pl-12 w-full peer lg:h-12 text-base font-medium text-gray-500 placeholder-gray-400 border-gray-300 hover:border-cyan-200 hover:ring-1 hover:ring-cyan-200
                                  focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300
                                  disabled:text-gray-300 disabled:placeholder-gray-300 disabled:hover:border-gray-300 disabled:hover:ring-0 disabled:cursor-not-allowed"
                       type="text"
                       id="search"
                       value={ filterText }
                       onChange={ (e) => onFilterTextChange(e.target.value) }/>
            </div>
        </>
    )
}