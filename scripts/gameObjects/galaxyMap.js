import {
    generateGalaxy
} from "../generators/generateGalaxy.js"

let galaxyMap = []

if (!galaxyMap[0]) {
    galaxyMap = generateGalaxy(1)
}
export {
    galaxyMap
}