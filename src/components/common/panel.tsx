import { ReactNode } from 'react';

interface PanelProps {
    children: ReactNode
    highlighted?: boolean
    className?: string
}

export const Panel = ({ children, highlighted = false, className = '' }: PanelProps) =>
    (
        <section className={ `p-4 w-full h-full lg:p-7 rounded-xl ${ className }
                             ${ highlighted ? 'bg-cyan-200' : 'bg-white border-2 border-gray-200' }` }>
            { children }
        </section>
    )