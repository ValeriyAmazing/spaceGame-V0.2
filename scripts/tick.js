import {
    calculateUpgrades
} from "./construct.js"
import { drawPlanet } from "./draw/drawPlanet.js";
import {
    buildings
} from "./gameObjects/buildings.js";
import {
    planetList
} from "./gameObjects/planets.js"
import {
    technology
} from "./science.js";


function tick() {
    for (const planet of planetList) {
        if (planet.cells) {
            planet.cells.forEach(cell => {
                if (cell.building) {
                    if (cell.building.constructEnd < Date.now() && cell.building.constructEnd !== null) {
                        cell.building.upgrades = calculateUpgrades(buildings[cell.building.key].upgrades, cell.building.lvl)
                        cell.building.constructEnd = null
                        if (cell.building.key === 'storage') {
                            console.log(cell.building.upgrades);
                            for (const [key, value] of Object.entries(cell.building.upgrades)) {
                                planet.maxStorage[key] += value
                            }
                            cell.building.upgrades = null
                        } else {
                            cell.building.incomes = cell.building.upgrades
                            cell.building.upgrades = null
                        }
                        
                    }
                    if (cell.building.incomes) {
                        for (const [key, value] of Object.entries(cell.building.incomes)) {

                            if (planet.currentStorage[key] < planet.maxStorage[key]) {
                                planet.currentStorage[key] += value
                            } else planet.currentStorage[key] = planet.maxStorage[key]
                        }
                    }
                }
            })

        }
    }
    setTimeout(tick, 1000, 1000)
}


export {
    tick
}