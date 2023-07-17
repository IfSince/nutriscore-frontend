import { isDefined } from '../../../../../utils/is-defined.ts';

export const validate = (value?: string, validations?: ((value?: string) => string | undefined)[]): string[] =>
    validations?.map(validation => validation(value)).filter(isDefined) || []