import {
    buildings
} from "../gameObjects/buildings.js"

function drawBuilding(buildingType) {
    const building = document.createElement('img')
    building.src = `${buildings[buildingType].imageSrc}`
    building.style.cssText = buildings[buildingType].cssStyle

    building.width = 140

    return building
}

export {
    drawBuilding
}