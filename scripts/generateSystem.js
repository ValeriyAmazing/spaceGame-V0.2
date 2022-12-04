import {
    planetList
} from "./gameObjects/planets.js";
import {
    systemTemlates
} from "./gameObjects/systems.js";
import {
    generatePlanet
} from "./generatePlanet.js";
import {
    getRandom
} from "./getRandom.js";

function generateRandomSystem(id) {
    const systemTemlate = systemTemlates[getRandom(0, systemTemlates.length - 1)]
    const randomSystem = {
        id: id,
        planets: [],
    }
    let orbit = 0
let planetId = Number(`${id}${orbit}`)
    for (const planetName of systemTemlate) {
        randomSystem.planets.push(generatePlanet(planetName, orbit, planetId))
    }

    return randomSystem
}

export {
    generateRandomSystem
}