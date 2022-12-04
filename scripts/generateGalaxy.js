import {
    generateRandomSystem
} from "./generateSystem.js"

function generateGalaxy(amountOfSystems) {
    const galaxyMap = []

    for (let id = 0; id < amountOfSystems; id++) {
        galaxyMap.push(generateRandomSystem(id))
    }

    return galaxyMap
}
export { generateGalaxy }