import { ReactNode } from 'react';

interface PanelProps {
    children: ReactNode
    highlighted?: boolean
    additionalStyles?: string
}

export const Panel = ({ children, highlighted = false, additionalStyles = '' }: PanelProps) =>
    (
        <section className={ `p-4 w-full lg:p-7 h-full rounded-xl ${ additionalStyles }
                             ${ highlighted ? 'bg-cyan-200' : 'bg-white border-2 border-gray-200' }` }>
            { children }
        </section>
    )