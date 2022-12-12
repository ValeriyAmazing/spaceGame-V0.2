import { galaxyMap } from "./gameObjects/galaxyMap.js"

const currents = {}

function getCurrentystem() {
    currents.system = galaxyMap[0]
}

function getCurrentPlanet() {
    currents.planet = galaxyMap[0].planets[0]
}

function setCurrentCell(id) {
    currents.cell = currents.planet.cells[id]   
}

export { currents, getCurrentystem, getCurrentPlanet, setCurrentCell }