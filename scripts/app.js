import { drawPlanet } from "./draw/drawPlanet.js"
import { buildings } from "./gameObjects/buildings.js"
import {
    planetList
} from "./gameObjects/planets.js"
import {
    generatePlanetCells
} from "./generators/generatePlanetCells.js"
import {
    currents,
    setCurrentCell,
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
setCurrentCell()
 
drawPlanet()

tick()

console.log(currents.planet.maxStorage.metal);

export {
    container,
}