import {
    planets
} from "./gameObjects/planets.js"

function generatePlanetCells(planetName) {
    let id = 0
    const cells = []
    // const cell = {id,type,building}
    for (const buildingType in planets[planetName].buildingPlaces) {
        for (let i = 0; i < planets[planetName].buildingPlaces[buildingType]; i++) {
            const cell = {
                id: id,
                allowedBuilding: `${buildingType}`,
            }

            cells.push(cell)
            id++
        }
    }
    return cells
}
export { generatePlanetCells }