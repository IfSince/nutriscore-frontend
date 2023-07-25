export interface ApiError {
    status: number
    data: {
        message: string
        errors?: {
            [key: string]: string[]
        }
    }
}