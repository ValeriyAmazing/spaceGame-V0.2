import {
    container
} from "../app.js"
import {
    generateNewBuilding,
    takeCost
} from "../construct.js"
import {
    buildings
} from "../gameObjects/buildings.js"
import {
    currents,
    setCurrentCell
} from "../getCurrentItems.js"
import {
    drawBuilding
} from "./drawBuilding.js"
import {
    drawBuildingMenuItem
} from "./drawBuildMenu.js"
import { timerStart } from '../timer.js';

function drawPlanet() {
    const planetMenuItems = createElWithClass('planet-menu')
    const planetMenuWrapper = createElWithClass('planet-menu-wrapper')
    // const planetMenuCloseBtn = create('planet-menu-close-btn')
    const storage = createElWithClass('storage')
    const storageMetal = createElWithClass('item-cost-metal')
    const storagePolimer = createElWithClass('item-cost-polimer')
    const storageGas = createElWithClass('item-cost-gas')
    const planetField = createElWithClass('planet')
    const space = createElWithClass('space')
    const gas = createElWithClass('gas')
    const poly = createElWithClass('poly')
    const metal = createElWithClass('metal')
    const ground = createElWithClass('ground')

    container.innerHTML = ''

    // storage.style.cssText = `
    //     height: 20px;
    //     width: 1200px;
    //     background-color: white;
    //     border-radius: 10px;
    //     border: 1px solid black;
    //     text-align: center;
    //     vertical-align: center;
    //     display: flex;А
    //     justify-content: center;
    //     align-items: center;
    //     margin-bottom: 15px;`

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
        // else planetMenuWrapper.classList.remove('planet-menu-active')

    })

function showStorage() {
    storageMetal.innerHTML = `${currents.planet.currentStorage.metal}/${currents.planet.maxStorage.metal}`
    storagePolimer.innerHTML = `${currents.planet.currentStorage.polimer}/${currents.planet.maxStorage.polimer}`
    storageGas.innerHTML = `${currents.planet.currentStorage.gas}/${currents.planet.maxStorage.gas}`

    requestAnimationFrame(showStorage)
}

    planetField.append(planetMenuWrapper, space, gas, poly, metal, ground)
    planetMenuWrapper.append(planetMenuItems)
    container.append(storage, planetField)
    storage.append(storageMetal, storagePolimer, storageGas)
    drawCells(gas, poly, metal, space, ground)
    showStorage()
}

function drawCells(gasDOMElement, polyDOMElement, metalDOMElement, spaceDOMElement, groundDOMElement) {

    for (const _cell of currents.planet.cells) {
        const cell = document.createElement('div')

        cell.classList.add(_cell.allowedBuildingType)
        cell.id = _cell.id
        cell.classList.add("cell")
        switch (_cell.allowedBuildingType) {
            case 'gasMiner':
                gasDOMElement.append(cell)
                break;
            case 'polimerMiner':
                polyDOMElement.append(cell)
                break;
            case 'metalMiner':
                metalDOMElement.append(cell)
                break;
            case 'spaceBuilding':
                spaceDOMElement.append(cell)
                break;
            case 'groundBuilding':
                groundDOMElement.append(cell)
                break;
            default:
                console.log('something wrong!');
        }
        if (_cell.building) {
            const building = drawBuilding(_cell.building.key)
            const buildingInfo = createElWithClass('building-lvl')
            buildingInfo.innerText = `${_cell.building.lvl}`
            cell.append(buildingInfo)
            cell.append(building)
            if (_cell.building.constructEnd != null) {
                timerStart(_cell.building.constructEnd, buildingInfo, drawPlanet)
                
            }
        }
    }
}



function createElWithClass(_class) {
    const el = document.createElement('div')
    if (_class) {
        el.classList.add(_class)
    }
    return el
}


export {
    drawPlanet,
    createElWithClass
}