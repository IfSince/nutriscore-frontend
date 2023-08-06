export const getInputStyles = (isInvalid: boolean, includingIconLeft?: boolean) =>
    `h-11 rounded-md border transition-selection px-4 w-full peer lg:h-12 text-base font-medium text-gray-500 placeholder-gray-400
    focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 focus:outline-none
    focus-visible:border-cyan-300 focus-visible:ring-1 focus-visible:ring-cyan-300 focus-visible:outline-none
    ${ isInvalid ? 'border-error hover:border-error hover:ring-1 hover:ring-error' : 'border-gray-300 hover:border-cyan-200 hover:ring-1 hover:ring-cyan-200' }
    ${ includingIconLeft ? 'pl-11 md:pl-12' : '' }
    disabled:bg-gray-200 disabled:text-gray-300 disabled:placeholder-gray-300 disabled:hover:border-gray-300 disabled:hover:ring-0 disabled:cursor-not-allowed`