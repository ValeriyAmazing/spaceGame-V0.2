import {
    systems
} from "./gameObjects/systems.js";
import {
    generatePlanet
} from "./generatePlanet.js";
import {
    getRandom
} from "./getRandom.js";

function generateRandomSystem(id) {

    const randomSystem = {
        id: id,
        planets: [],
    }

    for (let planetPosition = 1; planetPosition < getRandom(2, 9); planetPosition++){
        
    }

    return randomSystem
}

export {
    generateRandomSystem
}