export const Validations = {
    required: (value?: string) => {
        if (!value || value.length === 0) {
            return 'This field is required'
        }
    },
    minLength: (minLength: number) =>
        (value?: string) => {
            if (value && value?.length < minLength) {
                return `This field needs at least ${ minLength } characters`
            }
        },
    notGreaterThan: (maxValue: number) =>
        (value?: string) => {
            const valueAsNumber = value ? Number(value): null
            if (valueAsNumber && valueAsNumber > maxValue) {
                return `This field cannot have a value greater than ${ maxValue }`
            }
        },
    emailFormat: (value?: string) => {
        const validRegex = /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/
        if (value && !value.match(validRegex)) {
            return 'This field needs to be in a valid email format'
        }
    },
}