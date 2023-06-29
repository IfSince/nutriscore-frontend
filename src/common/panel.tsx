import { ReactNode } from 'react';

interface PanelProps {
    children: ReactNode
    highlighted?: boolean
    className?: string
    title?: string
}

export const Panel = ({ children, highlighted = false, className = '', title }: PanelProps) =>
    <section className={ `p-4 lg:p-7 rounded-xl grow ${ className }
                         ${ highlighted ? 'bg-cyan-200' : 'bg-white border-2 border-gray-200' }` }>
        { title && <h3 className="text-lg font-bold text-gray-600 lg:text-xl">{ title }</h3> }
        { children }
    </section>