import { ReactNode } from 'react';

interface PanelProps {
    children: ReactNode
    highlighted?: boolean
    className?: string
    title?: string
}

export const Panel = ({ children, highlighted = false, className = '', title }: PanelProps) =>
    <section className={ `p-4 lg:p-7 rounded-2xl grow ${ className } ${ highlighted ? 'bg-cyan-200' : 'bg-white border border-gray-300' }` }>
        { title && <h3 className="text-lg font-bold lg:text-xl capitalize">{ title }</h3> }
        { children }
    </section>