export enum Unit {
    KILOGRAM = 'KILOGRAM',
    GRAM = 'GRAM',
    POUND = 'POUND',

    METER = 'METER',
    CENTIMETER = 'CENTIMETER',
    INCH = 'INCH',

    MILLILITER = 'MILLILITER',
    LITER = 'LITER',

    AMOUNT = 'AMOUNT',
}

export const UNIT_ABBREVIATIONS: Record<Unit, string> = {
    [Unit.KILOGRAM]: 'kg',
    [Unit.GRAM]: 'g',
    [Unit.POUND]: 'lbs',
    [Unit.METER]: 'm',
    [Unit.CENTIMETER]: 'cm',
    [Unit.INCH]: 'in',
    [Unit.MILLILITER]: 'ml',
    [Unit.LITER]: 'l',
    [Unit.AMOUNT]: '',

}