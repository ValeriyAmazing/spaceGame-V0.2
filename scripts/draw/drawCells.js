import {
    currents
} from "../getCurrentItems.js"
import {
    timerStart
} from "../timer.js";
import {
    drawBuilding
} from "./drawBuilding.js"
import {
    createElWithClass, planetField,
} from './drawPlanet.js';


function drawCells() {
    const space = createElWithClass('space')
    const gas = createElWithClass('gas')
    const poly = createElWithClass('poly')
    const metal = createElWithClass('metal')
    const ground = createElWithClass('ground')

    for (const _cell of currents.planet.cells) {
        const cell = document.createElement('div')

        cell.classList.add(_cell.allowedBuildingType)
        cell.id = _cell.id
        cell.classList.add("cell")
        switch (_cell.allowedBuildingType) {
            case 'gasMiner':
                gas.append(cell)
                break;
            case 'polimerMiner':
                poly.append(cell)
                break;
            case 'metalMiner':
                metal.append(cell)
                break;
            case 'spaceBuilding':
                space.append(cell)
                break;
            case 'groundBuilding':
                ground.append(cell)
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
                timerStart(_cell.building.constructEnd, buildingInfo, () => {
                    buildingInfo.innerText = `${_cell.building.lvl}`
                })
            }
        }
    }
    
    planetField.append(space, gas, poly, metal, ground)
}
export {
    drawCells
}