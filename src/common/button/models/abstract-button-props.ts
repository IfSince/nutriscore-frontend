export interface AbstractButtonProps {
    type?: 'button' | 'submit' | 'reset'
    className?: string
    action: (...args: any[]) => unknown | string
}