import { planets } from "./gameObjects/planets.js";
import {
    systems
} from "./gameObjects/systems.js";

function generateRandomSystem() {
    const systemTemplate = systems[getRandom(0, systems.length - 1)]
    const randomSystem = []
    for (const planet of systemTemplate) {
randomSystem.push(JSON.parse(JSON.stringify(planets[planet])))
    }

}