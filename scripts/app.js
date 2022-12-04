
import { generateNewBuilding, takeCost } from "./construct.js"

import { planetList } from "./gameObjects/planets.js"
import { generatePlanetCells } from "./generatePlanetCells.js"
import { currents, getCurrentCell, getCurrentPlanet } from "./getCurrentItems.js"
import { tick } from "./tick.js"

const container = document.querySelector('.container')
const cell = document.createElement('div')
container.append(cell)


getCurrentPlanet()

planetList.push(currents.planet)

function showStorage() {

    cell.innerHTML = `${currents.planet.currentStorage.metal}`
    requestAnimationFrame(showStorage)
}
currents.planet.currentStorage.metal = 1000
currents.planet.currentStorage.gas = 1000
currents.planet.currentStorage.polimer = 1000

currents.planet.cells = generatePlanetCells(currents.planet.type)
getCurrentCell()
if (takeCost('metalMiner', 0, currents.planet.currentStorage)) {
    
    currents.cell.building = generateNewBuilding('metalMiner')
}
    console.log(currents.planet);
tick()
showStorage()

