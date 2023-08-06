import { useField } from 'formik';

export const MacroValuePicker = ({ ...props }) => {
    const [field] = useField(props.name)
    return (
        <label className={ `grow rounded-2xl border border-gray-200 p-4 transition-colors
                            ${ props.disabled
                                ? ''
                                : 'group cursor-pointer hover:border-gray-300 hover:bg-gray-50 focus-within:border-gray-300 focus-within:bg-gray-50 focus-within:ring-1 focus-within:ring-gray-300'
                             }`
                          }
               htmlFor={ props.name }>
            <span className="mb-4 block font-medium text-gray-600">{ props.description }</span>
            <div className="flex items-center">
                <div className="relative flex w-3 flex-col overflow-hidden rounded-full h-18">
                    <span className={ `absolute right-0 bottom-0 h-full w-full opacity-30 ${ props.color }` }></span>
                    <span className={ `absolute right-0 bottom-0 h-2/4 w-full ${ props.color }` }></span>
                </div>

                <div className="ml-6 flex flex-col">
                    <input className="text-xl font-medium text-gray-600 w-16 py-0 px-0 border-none transition-colors
                                      disabled:bg-white
                                      group-hover:bg-gray-50 focus:border-none focus:ring-0 focus:bg-gray-50"
                           type="number"
                           id={ props.name }
                           { ...field }{ ...props }/>
                    <span className="text-gray-500">{ props.unit }</span>
                </div>
            </div>
        </label>
    )
}