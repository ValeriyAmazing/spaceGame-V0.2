import {
    buildings
} from "../gameObjects/buildings.js"

function drawBuilding(buildingType) {
    const building = document.createElement('img')
    building.src = `${buildings[buildingType].imageSrc}`
    building.style.cssText = `transform: translate(-50%, 50%);position: relative;top: -125%;left: 50%;`
    building.width = 140


    return building


}

export {
    drawBuilding
}