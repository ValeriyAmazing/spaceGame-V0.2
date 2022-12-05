import {
    getNewIncomes
} from "./construct.js"
import {
    planetList
} from "./gameObjects/planets.js"


function tick() {
    for (const planet of planetList) {
        if (planet.cells) {
            for (const cell of planet.cells) {
                if (cell.building && cell.building.constructStatus === 'construct' && cell.building.constructEnd < Date.now()) {
                    cell.building.incomes = getNewIncomes(cell.building, cell.building.lvl)
                }
                if (cell.building && cell.building.incomes) {
                    for (const incomeType in cell.building.incomes) {
                        if (planet.currentStorage[incomeType] < planet.maxStorage[incomeType]) {
                            console.log(planet.currentStorage[incomeType] += cell.building.incomes[incomeType])
                        } else planet.currentStorage[incomeType] = planet.maxStorage[incomeType]
                    }
                }

            }
        }
    }
    setTimeout(tick, 1000, 1000)
}
export {
    tick
}