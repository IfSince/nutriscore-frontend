export const Validations = {
    required: (value?: string) => {
        if (!value || value.length == 0) {
            return 'This field is required'
        }
    },
    minLength: (minLength: number) => {
        return (value?: string) => {
            if (value && value?.length <= minLength) {
                return `This field needs at least ${ minLength } characters`
            }
        }
    },
}