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
    console.log(sum)

    if (sum !== 24) {
        console.log('Validation error not 24')
        return
    }

    const sleepingPal = data.sleeping * 0.95
    const onlySittingPal = data.onlySitting * 1.2
    const occasionalActivitiesPal = data.occasionalActivities * 1.4
    const sittingOrStandingPal = data.mostlySittingOrStanding * 1.6
    const walkingOrStandingPal = data.mostlyWalkingOrStanding * 1.8
    const physicallyDemandingPal = data.physicallyDemanding * 2.2

    return (
        sleepingPal + onlySittingPal + occasionalActivitiesPal + sittingOrStandingPal + walkingOrStandingPal + physicallyDemandingPal
    ) / 24
}