import { currents } from "../getCurrentItems.js"
import { createElWithClass } from "./drawPlanet.js"

const storage = createElWithClass('storage')
const storageMetal = createElWithClass('item-cost-metal')
const storagePolimer = createElWithClass('item-cost-polimer')
const storageGas = createElWithClass('item-cost-gas')

function showStorage() {
    storageMetal.innerHTML = `${currents.planet.currentStorage.metal}/${currents.planet.maxStorage.metal}`
    storagePolimer.innerHTML = `${currents.planet.currentStorage.polimer}/${currents.planet.maxStorage.polimer}`
    storageGas.innerHTML = `${currents.planet.currentStorage.gas}/${currents.planet.maxStorage.gas}`

    requestAnimationFrame(showStorage)
}

storage.append(storageMetal, storagePolimer, storageGas)

export { storage, showStorage }