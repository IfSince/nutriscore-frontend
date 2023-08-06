import { ErrorMessage } from 'formik';

export const FieldError = ({ name }: { name: string }) => {
    return (
        <ErrorMessage name={ name }>
            {
                message => <span className="block mt-2 pl-1 text-error text-sm sm:text-base">{ message }</span>
            }
        </ErrorMessage>
    )
}