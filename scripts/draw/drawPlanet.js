import {
    container
} from "../app.js"
import {
    generateNewBuilding,
    takeCost
} from "../construct.js"
import {
    currents,
    getCurrentCell
} from "../getCurrentItems.js"
import {
    drawBuilding
} from "./drawBuilding.js"

function drawPlanet() {
    const storage = create('storage')
    const planetField = create('planet')
    const space = create('space')
    const gas = create('gas')
    const poly = create('poly')
    const metal = create('metal')
    const ground = create('ground')

    container.innerHTML = ''

    storage.style.cssText = `
        height: 20px;
        width: 1200px;
        background-color: white;
        border-radius: 10px;
        border: 1px solid black;
        text-align: center;
        vertical-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;`
    
    planetField.addEventListener('click', (e) => {
        const target = e.target.closest('.cell')

        getCurrentCell(target.id)

        if (!currents.cell.building && takeCost('metalMiner', 0, currents.planet.currentStorage)) {
            currents.cell.building = generateNewBuilding('metalMiner')
        }

        drawPlanet()
    })

    function create(_class) {
        const el = document.createElement('div')
        el.classList.add(_class)
        return el
    }

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
            case 'spaceBuildings':
                space.append(cell)
                break;
            case 'groundBuildings':
                ground.append(cell)
                break;
            default:
                console.log('something wrong!');
        }
        if (_cell.building) {
            const building = drawBuilding(_cell.building.type)
            const buildingInfo = document.createElement('div')
            buildingInfo.style.cssText = `transform: translate(-50%, 50%);position: relative;top: -75%;left: 50%;background:white;min-width:35px;min-heigth:25px;border-radius:10px;text-align:center;`
            buildingInfo.innerText = `${_cell.building.lvl+1}`
            cell.append(building)
            cell.append(buildingInfo)
        }
    }

    planetField.append(space, gas, poly, metal, ground)
    container.append(storage, planetField)

    showStorage()

    function showStorage() {
        storage.innerHTML = `metal: ${currents.planet.currentStorage.metal}     gas: ${currents.planet.currentStorage.gas}     polimer:${currents.planet.currentStorage.polimer}`
        requestAnimationFrame(showStorage)
    }

}


export {
    drawPlanet
}