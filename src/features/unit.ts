import { UnitFilter } from '../common/form/components/unit-selector/unit-filter.ts';

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

export const UNIT_DISPLAYNAMES: Record<Unit, string> = {
    [Unit.KILOGRAM]: 'Kilogram',
    [Unit.GRAM]: 'Gram',
    [Unit.POUND]: 'Pound',
    [Unit.METER]: 'Meter',
    [Unit.CENTIMETER]: 'Centimeter',
    [Unit.INCH]: 'Inch',
    [Unit.MILLILITER]: 'Milliliter',
    [Unit.LITER]: 'Liter',
    [Unit.AMOUNT]: 'Amount',
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

export const UNITS_FILTERED_BY_TYPE: Record<UnitFilter, Unit[]> = {
    [UnitFilter.HEIGHT_UNITS]: [Unit.CENTIMETER, Unit.METER, Unit.INCH],
    [UnitFilter.WEIGHT_UNITS]: [Unit.GRAM, Unit.KILOGRAM, Unit.POUND],
    [UnitFilter.AMOUNT_UNITS]: [Unit.AMOUNT, Unit.GRAM, Unit.KILOGRAM, Unit.LITER],
}