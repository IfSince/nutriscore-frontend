import { Button } from '../../../../common/button/components/button.tsx';

interface DiarySearchInputProps {
    filterText: string
    onFilterTextChange: (value: string) => void
}

export const DiarySearchInput = ({ filterText, onFilterTextChange }: DiarySearchInputProps) => {
    return (
        <form className="flex w-full items-center pt-6">
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 md:pl-4">
                    <span className="text-gray-400 material-icons-round">search</span>
                </div>
                <input className="block h-10 w-full cursor-pointer rounded-lg border-none pl-11 text-gray-500 ring-cyan-200 ring-1
                                  md:pl-12 lg:h-12 focus:ring-cyan-300 focus:ring-2 transition-shadow hover:ring-2"
                       type="text"
                       id="simple-search"
                       value={ filterText }
                       onChange={ (e) => onFilterTextChange(e.target.value) }
                ></input>
            </div>
            <Button action={ console.log } type="button" level="primary" className="ml-2 aspect-square text-gray-50 md:ml-4 md:aspect-auto md:px-4">
                <span className="text-2xl material-icons-round">add</span>
                <span className="hidden whitespace-nowrap px-2 text-base font-medium md:inline tracking-wide">New entry</span>
            </Button>

            <Button action={ console.log } type="button" level="primary" className="ml-2 aspect-square text-gray-50 md:ml-4 md:aspect-auto md:px-4">
                <span className="text-lg material-icons-round">qr_code_scanner</span>
                <span className="hidden whitespace-nowrap px-2 text-base font-medium md:inline tracking-wide">Scan code</span>
            </Button>
        </form>
    )
}