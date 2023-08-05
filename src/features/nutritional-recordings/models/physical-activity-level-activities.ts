export interface PhysicalActivityLevelActivities {
    sleeping: number,
    onlySitting: number,
    occasionalActivities: number,
    mostlySittingOrStanding: number,
    mostlyWalkingOrStanding: number,
    physicallyDemanding: number,
}

export const determinePal = (data: PhysicalActivityLevelActivities) => {
    const sum = Object.values(data).reduce((prev, curr) => prev + curr)

    if (sum !== 24) {
        return 0
    }

    return (
        data.sleeping * 0.95 +
        data.onlySitting * 1.2 +
        data.occasionalActivities * 1.4 +
        data.mostlySittingOrStanding * 1.6 +
        data.mostlyWalkingOrStanding * 1.8 +
        data.physicallyDemanding * 2.2
    ) / 24
}