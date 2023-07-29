export interface AbstractButtonProps {
    text?: string
    type?: 'button' | 'submit' | 'reset'
    className?: string
    action?: (...args: any[]) => unknown | string
    preventDefault?: boolean
    disabled?: boolean
    isSubmitting?: boolean
}