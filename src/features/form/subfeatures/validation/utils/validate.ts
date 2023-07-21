import { isDefined } from '../../../../../utils/is-defined.ts';
import { FormFieldValueTypes } from '../../../models/form-field-data.tsx';

export const validate = <T extends FormFieldValueTypes>(value?: T, validations?: ((value?: string) => string | undefined)[]): string[] =>
    validations?.map(validation => validation(value?.toString())).filter(isDefined) || []