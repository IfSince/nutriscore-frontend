interface QuickActionsItemProps {
    action: () => void
    icon: string
    description: string
}

export const QuickActionsItem = ({ action, icon, description }: QuickActionsItemProps) =>
    <button className="relative w-12 md:w-14 aspect-square text-gray-600 bg-white rounded-lg border border-gray-200 shadow-sm flex justify-center items-center transition-colors hover:bg-gray-50"
            type="button"
            onClick={ action }>
        <span className="material-icons-round text-xl md:text-3xl">{ icon }</span>
        <span className="absolute text-base font-medium -translate-y-1/2 left-0 top-1/2 -translate-x-full pr-4 md:pr-6">{ description }</span>
    </button>
