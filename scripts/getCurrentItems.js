import { galaxyMap } from "./galaxyMap.js"

const currents = {}

function getCurrentystem() {
    currents.system = galaxyMap[0]
    
}

function getCurrentPlanet() {
    currents.planet = galaxyMap[0].planets[0]
   
}

function getCurrentCell() {
    currents.cell = galaxyMap[0].planets[0].cells[0]
    
}

export { currents, getCurrentystem, getCurrentPlanet, getCurrentCell }