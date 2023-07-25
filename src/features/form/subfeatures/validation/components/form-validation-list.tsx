export const FormValidationList = ({ errors }: { errors: string[] }) =>
    (
        <ul className="mt-2 pl-1 text-error text-sm sm:text-base">
            {
                errors.map(error => <li key={ error }>{ error }</li>)
            }
        </ul>
    )