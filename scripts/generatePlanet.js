import {
    planets
} from "./gameObjects/planets.js";

function generatePlanet(planetName, orbitNum, planetId) {
    const planet = {}
    planet.id = planetId
    planet.type = planets[planetName].type
    planet.name = JSON.parse(JSON.stringify(planets[planetName].name))
    planet.orbit = orbitNum
    planet.buildingPlaces = planets[planetName].buildingPlaces
    planet.imgSrc = planets[planetName].imgSrc
    planet.cells = []
    planet.currentStorage = {
        metal: 0,
        gas: 0,
        polimer: 0
    }
    planet.maxStorage = {
        metal: 1000,
        gas: 1000,
        polimer: 1000
    }
    planet.incomes = {
        metal: 0,
        gas: 0,
        polimer: 0
    }
    return planet
}

export {
    generatePlanet
}