import {
    container
} from "../app.js"

import {
    buildings
} from "../gameObjects/buildings.js"
import {
    currents,
    setCurrentCell
} from "../getCurrentItems.js"

import {
    drawBuildingMenuItem
} from "./drawBuildMenu.js"

import {
    planetMenuItems,
    planetMenuWrapper
} from "./drawPlanetMenu.js"
import {
    showStorage,
    storage
} from "./drawStorage.js"
import {
    drawCells
} from "./drawCells.js"
import { errorWraper } from "./drawErrorPop.js"

const planetField = createElWithClass('planet')


function drawPlanet() {
    container.innerHTML = ''
    planetField.innerHTML = ''
    planetField.addEventListener('click', (e) => {
        if (e.target.closest('.cell')) {
            const target = e.target.closest('.cell')
            planetMenuItems.innerHTML = ''
            setCurrentCell(target.id)
            planetMenuWrapper.classList.add('planet-menu-active')
            if (!currents.cell.building) {
                for (const building in buildings) {

                    if (buildings[building].type == currents.cell.allowedBuildingType) {
                        const menuItem = drawBuildingMenuItem(building, 1, 'Build')
                        planetMenuItems.append(menuItem)
                    }
                }
            }
            if (currents.cell.building && currents.cell.building.constructEnd === null) {
                const menuItem = drawBuildingMenuItem(currents.cell.building.key, currents.cell.building.lvl + 1, 'Upgrade')
                planetMenuItems.append(menuItem)
            }
        }
    })
    drawCells()
    showStorage()
    planetField.append(planetMenuWrapper)
    container.append(storage, planetField,errorWraper)


}



function createElWithClass(_class, _tag = 'div') {
    const el = document.createElement(_tag)
    if (_class) {
        el.classList.add(_class)
    }
    return el
}



export { planetField, drawPlanet, createElWithClass }