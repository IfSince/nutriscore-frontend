
export interface ProgressProps {
    name?: string
    size?: number
    value: number
    total: number
    unit: string
    width?: number
    trackStyles?: string
    indicatorStyles?: string
}