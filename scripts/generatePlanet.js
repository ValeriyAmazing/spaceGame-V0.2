import {
    planets
} from "./gameObjects/planets.js";

function generatePlanet(planetName, orbitNum) {
    const planet = {}
    planet.type = planets[planetName].type
    planet.name = JSON.parse(JSON.stringify(planets[planetName].name))
    planet.orbit = orbitNum
    planet.buildingPlaces = planets[planetName].buildingPlaces
    planet.imgSrc = planets[planetName].imgSrc
    planet.cells = []
    
    return planet
}

export {
    generatePlanet
}