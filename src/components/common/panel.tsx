import { ReactNode } from 'react';

interface PanelProps {
    children: ReactNode
    highlighted?: boolean
}

export const Panel = ({ children, highlighted = false }: PanelProps) => {
    return (
        <div className={ `p-4 lg:p-7 rounded-lg ${ highlighted ? 'bg-cyan-200' : 'bg-white border-2 border-gray-200' }` }>
            { children }
        </div>
    )
}