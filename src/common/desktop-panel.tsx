import { ReactNode } from 'react';

interface DesktopPanelProps {
    children: ReactNode
    highlighted?: boolean
    className?: string
    title?: string
}

export const DesktopPanel = ({ children, highlighted = false, className = '', title }: DesktopPanelProps) =>
    <section className={ `lg:p-7 rounded-xl grow ${ className }
                         ${ highlighted ? 'lg:bg-cyan-200' : 'lg:border lg:border-gray-300' }` }>
        { title && <h3 className="text-lg font-bold text-gray-600 lg:text-xl">{ title }</h3> }
        { children }
    </section>