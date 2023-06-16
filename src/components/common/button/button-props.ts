export interface ButtonProps {
    level?: 'primary' | 'secondary'
    action: (...args: any[]) => unknown | string
}