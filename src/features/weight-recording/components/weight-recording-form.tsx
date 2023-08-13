import { FormProps } from '../../../common/form/models/form-props.ts';
import { ReactNode } from 'react';
import { WeightRecording } from '../models/weight-recording.ts';
import { Form, Formik } from 'formik';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { SelectDateField } from '../../../common/form/components/select-date-field.tsx';
import { DesktopPanel } from '../../../common/desktop-panel.tsx';
import { InputField } from '../../../common/form/components/input-field/input-field.tsx';

export const WeightRecordingForm = ({ form, onSubmit, apiError, isLoading, children }: FormProps<WeightRecording> & { children?: ReactNode }) => {
    return (
        <DesktopPanel>
            <Formik initialValues={ form } onSubmit={ onSubmit }>
                <Form>
                    <ApiErrorMessage apiErrorResponse={ apiError }/>

                    <div className="mt-4 w-full">
                        <SelectDateField name="dateOfRecording" displayname="Date of birth"/>
                    </div>

                    <div className="mt-4 w-full">
                        <InputField name="weight" displayName="Weight" type="number" apiError={ apiError } disabled={ isLoading }/>
                    </div>

                    <div className="mt-10 w-full">
                        { children }
                    </div>
                </Form>
            </Formik>

        </DesktopPanel>
    )
}
