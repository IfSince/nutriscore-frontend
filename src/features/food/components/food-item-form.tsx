import { DesktopPanel } from '../../../common/desktop-panel.tsx';
import { DefaultIconButton } from '../../../common/button/components/icon/default-icon-button.tsx';
import { Field, FieldProps, Form, Formik } from 'formik';
import { ReactNode } from 'react';
import { CategorySelector } from '../../categories/components/category-selector.tsx';
import { AllergenicSelector } from '../../allergenics/components/allergenic-selector.tsx';
import { ApiErrorMessage } from '../../../common/messages/api-error-message.tsx';
import { SubmitButton } from '../../../common/button/components/submit-button.tsx';
import { Badge } from '../../../common/badge.tsx';
import { FormProps } from '../../../common/form/models/form-props.ts';
import { FoodItem } from '../models/food-item.ts';
import { MacroValuePicker } from '../../macro-value-picker.tsx';
import { AmountSelector } from '../../../common/form/components/amount-selector/amount-selector.tsx';
import { UnitSelector } from '../../../common/form/components/unit-selector/unit-selector.tsx';
import { UnitFilter } from '../../../common/form/components/unit-selector/unit-filter.ts';

export const FoodItemForm = ({ form, onSubmit, apiError, isLoading, children, editable }: FormProps<FoodItem> & {
    children?: ReactNode,
    editable: boolean
}) =>
    (
        <DesktopPanel>
            <div className="mt-16 mb-24 flex flex-col gap-x-12 md:mt-24 md:flex-row lg:mt-0 lg:mb-0">
                <div
                    className="absolute top-0 left-0 -z-10 flex aspect-square w-full grow items-center justify-center border bg-gray-200 lg:relative lg:z-auto lg:max-w-sm lg:rounded-3xl">
                    <span className="text-4xl text-gray-400 material-icons-round">image</span>
                </div>

                <div className="-mr-5 -ml-5 grow rounded-2xl bg-white px-5 py-10 lg:py-0">
                    <Formik initialValues={ form } onSubmit={ onSubmit }>
                        {
                            () => (
                                <Form>
                                    <ApiErrorMessage apiErrorResponse={ apiError }/>
                                    <div className="flex flex-row justify-between">
                                        <div className="max-w-2xl">
                                            {
                                                editable
                                                    ? <CategorySelector disabled={ isLoading }/>
                                                    : <div className="mb-5 flex h-fit gap-2">
                                                        {
                                                            form.categories.map(category => <Badge key={ category.id }
                                                                                                   description={ category.description }/>)
                                                        }
                                                    </div>
                                            }
                                        </div>
                                        <div>
                                            <DefaultIconButton icon="favorite" action={ console.log }/>
                                        </div>
                                    </div>
                                    {
                                        editable
                                            ? <Field name="description">
                                                { ({ field }: FieldProps) => (
                                                    <div>
                                                        <input className={ `h-12 rounded-md border transition-selection px-4 w-full peer lg:h-14 font-medium text-gray-600 border-gray-300 mb-4 text-2xl lg:text-3xl max-w-md
                                                                    hover:border-cyan-200 hover:ring-1 hover:ring-cyan-200 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300
                                                                    disabled:text-gray-300 disabled:placeholder-gray-300 disabled:hover:border-gray-300 disabled:hover:ring-0 disabled:cursor-not-allowed` }
                                                               type="text"
                                                               id="description"
                                                               disabled={ isLoading }
                                                               { ...field }/>
                                                    </div>
                                                ) }
                                            </Field>
                                            : <h3 className="mb-4 text-2xl font-medium text-gray-600 lg:text-3xl">{ form.description }</h3>
                                    }

                                    {
                                        editable &&
                                        <div className="mt-2 mb-8">
                                            <h4 className="mb-4 text-xl font-medium text-gray-600">Amount</h4>
                                            <div className="flex justify-between items-center gap-6">
                                                <AmountSelector name="amount" unit={ form.unit } disabled={ isLoading }/>
                                                <UnitSelector name="unit" filter={ UnitFilter.AMOUNT_UNITS }/>
                                            </div>
                                        </div>
                                    }

                                    <div
                                        className="my-8 grid max-w-lg 1.5xl:max-w-3xl grid-cols-2 1.5xl:grid-cols-4 gap-4 1.5xl:gap-6 md:max-w-2xl md:grid-cols-4 lg:max-w-lg lg:grid-cols-2">
                                        <MacroValuePicker name="calories"
                                                          description="Calories"
                                                          unit="kcal"
                                                          color="bg-cyan-200"
                                                          disabled={ isLoading || !editable }/>

                                        <MacroValuePicker name="protein"
                                                          description="Protein"
                                                          unit="grams"
                                                          color="bg-red"
                                                          disabled={ isLoading || !editable }/>

                                        <MacroValuePicker name="carbohydrates"
                                                          description="Carbs"
                                                          unit="grams"
                                                          color="bg-green"
                                                          disabled={ isLoading || !editable }/>

                                        <MacroValuePicker name="fats"
                                                          description="Fats"
                                                          unit="grams"
                                                          color="bg-yellow"
                                                          disabled={ isLoading || !editable }/>
                                    </div>


                                    <h4 className="mb-4 text-xl font-medium text-gray-600">Allergenics</h4>
                                    <div className="max-w-xl">
                                        {
                                            editable
                                                ? <AllergenicSelector disabled={ isLoading }/>
                                                : <div className="mb-8 flex gap-2">
                                                    {
                                                        form.allergenics.map(allergenic => <Badge key={ allergenic.id }
                                                                                                  description={ allergenic.description }/>)
                                                    }
                                                </div>
                                        }
                                    </div>
                                    {
                                        editable &&
                                        <>
                                            <div className="my-4 border-t-2 border-gray-100 lg:my-6"></div>
                                            <div className="flex flex-row justify-between">
                                                <SubmitButton text="Create" isSubmitting={ isLoading } kind="grow"/>
                                            </div>
                                        </>
                                    }
                                </Form>
                            )
                        }
                    </Formik>
                    { children }
                </div>
            </div>
        </DesktopPanel>
    )