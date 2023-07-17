export const FormValidationList = ({ errors }: { errors: string[] }) => (
    <ul className="mt-1 pl-1 text-pink-600 text-sm sm:text-base">
        {
            errors.map(error => <li key={ error }>{ error }</li>)
        }
    </ul>
)