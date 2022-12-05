import {
    generateNewBuilding,
    takeCost
} from "./construct.js"
import { drawPlanet } from "./draw/drawPlanet.js"
import {
    planetList
} from "./gameObjects/planets.js"
import {
    generatePlanetCells
} from "./generators/generatePlanetCells.js"
import {
    currents,
    getCurrentCell,
    getCurrentPlanet
} from "./getCurrentItems.js"
import {
    tick
} from "./tick.js"
const container = document.querySelector('.container')

getCurrentPlanet()

planetList.push(currents.planet)

currents.planet.currentStorage.metal = 1000
currents.planet.currentStorage.gas = 1000
currents.planet.currentStorage.polimer = 1000
currents.planet.cells = generatePlanetCells(currents.planet.type)
getCurrentCell()
 
drawPlanet()

tick()

export {
    container,
}