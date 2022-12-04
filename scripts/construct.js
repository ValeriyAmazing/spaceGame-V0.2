import {
    buildings
} from "./gameObjects/buildings.js";

function generateNewBuilding(buildingType) {
    const building = {}

    building.type = buildingType
    building.imageSrc = buildings[buildingType].imageSrc
    building.lvl = buildings[buildingType].lvls[0].lvl
    building.constructTime = buildings[buildingType].lvls[0].constructTime
    building.constructEnd = Date.now() + building.constructTime * 1000
    building.constructStatus = `construct`

    return building
}


function takeCost(buildingType, buildingLvl, planetStorage) {

    for (const costType in buildings[buildingType].lvls[buildingLvl].cost) {
        if (planetStorage[costType] < buildings[buildingType].lvls[buildingLvl].cost[costType]) {
            return alert("Not Enought Resourses")
        }
    }

    for (const costType in buildings[buildingType].lvls[buildingLvl].cost) {
        planetStorage[costType] -= buildings[buildingType].lvls[buildingLvl].cost[costType]
    }

    return true
}

function getNewIncomes(building, lvl) {
    const incomes = {}

    for (const income in buildings[building.type].lvls[lvl].incomes) {
        incomes[income] = buildings[building.type].lvls[lvl].incomes[[income]]
    }
    building.constructStatus = `done`

    return incomes
}

export { generateNewBuilding, takeCost, getNewIncomes }