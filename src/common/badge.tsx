export const Badge = ({ description }: { description: string }) =>
    <span className="rounded-md bg-gray-100 px-4 text-xs font-medium leading-4 tracking-wide md:tracking-normal text-gray-500 py-1.5
                     md:py-2 md:text-sm md:leading-4 md:px-5">
        { description }
    </span>