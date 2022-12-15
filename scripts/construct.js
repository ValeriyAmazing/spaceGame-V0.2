import { showMessageError } from "./draw/drawErrorPop.js";
import {
    buildings
} from "./gameObjects/buildings.js";

function generateNewBuilding(buildingsKey, lvl) {
    const building = {}
    building.key = buildingsKey
    building.type = buildings[buildingsKey].type
    building.imageSrc = buildings[buildingsKey].imageSrc
    building.constructEnd = Date.now() + buildings[buildingsKey].baseConstructTime *  1000 *lvl**2
    building.constructStatus = `construct`
    building.lvl = lvl
    return building
}

// function calculateTheCost(buildingsKeyBaseCosts, lvl) {
//     const costs = {}
//     for (const [key, value] of Object.entries(buildingsKeyBaseCosts)) {
//         costs[key] = value * Math.pow(lvl, 3)
//     }

//     return costs
// }

function calculateTheCost(buildingsKeyBaseCosts, lvl) {
    const costs = {}
    for (const [key, value] of Object.entries(buildingsKeyBaseCosts)) {
        costs[key] = value * Math.pow(lvl, 3)
    }

    return costs
}

function takeCost(costs, planetStorage) {

    for (const [key, value] of Object.entries(costs)) {
       if (planetStorage[key] < value)
       {
           showMessageError('Not enought resosurses')
           return false
       }
        
    }
    for (const [key, value] of Object.entries(costs)) {
        planetStorage[key] -= value
    }


    return true
}

function calculateUpgrades(buildingsKeyupgrades, lvl) {
    const upgrades = {}

    for (const [key, value] of Object.entries(buildingsKeyupgrades)) {
        upgrades[key] = value * Math.pow(lvl, 2)
    }
    return upgrades
}


export { generateNewBuilding, calculateTheCost, takeCost, calculateUpgrades }