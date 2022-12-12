import {
    calculateTheCost,
    generateNewBuilding,
    calculateUpgrades,
    takeCost
} from "../construct.js"
import {
    buildings
} from "../gameObjects/buildings.js"
import {
    currents
} from "../getCurrentItems.js"
import {
    createElWithClass,
    drawPlanet
} from "./drawPlanet.js"
import {
    timeFormatted
} from '../timer.js';

function drawBuildingMenuItem(buildingKey, lvl, buttonText) {
    const cost = calculateTheCost(buildings[buildingKey].baseCosts, lvl)

createElWithClass
    const menuItem = createElWithClass('menu-item')

    const itemTitle = createElWithClass('item-title')
    itemTitle.innerHTML = `${buildings[buildingKey].buildingInfo.title}`

    const itemImg = document.createElement('img')
    itemImg.classList.add('item-img')
    itemImg.src = buildings[buildingKey].imageSrc
    itemImg.style.width = '100%'

    const itemDiscription = createElWithClass('item-discription')
    itemDiscription.innerHTML = `<p>${buildings[buildingKey].buildingInfo.description}</p>`

    const itemDetais = createElWithClass('item-costs-wrap')

    const itemCostMetal = createElWithClass('item-cost-metal')
    itemCostMetal.innerText = ` ${cost.metal}`

    const itemCostPolimer = createElWithClass('item-cost-polimer')
    itemCostPolimer.innerText = ` ${cost.polimer}`

    const itemCostGas = createElWithClass('item-cost-gas')
    itemCostGas.innerText = `${cost.gas}`

    const itemBuildTime = createElWithClass()
    itemBuildTime.innerHTML = `Building time: ${timeFormatted(buildings[buildingKey].baseConstructTime*1000*lvl**2)}`

    const itemInfoBtn = document.createElement('button')
    itemInfoBtn.classList.add('item-info-btn')
    itemInfoBtn.innerText = 'Building info'
    itemInfoBtn.addEventListener('click', () => {
        infoDescription.classList.toggle('hide')
    })

    const itemButton = document.createElement('button')
    itemButton.classList.add('item-button')
    itemButton.innerText = buttonText
    itemButton.addEventListener('click', () => {



        if (takeCost(cost, currents.planet.currentStorage)) {
            currents.cell.building = generateNewBuilding(buildingKey, lvl)
        }

        drawPlanet()

    })

    const infoDescription = createElWithClass('info-description')
    infoDescription.classList.add('hide')
    for (let i = 1; i < 26; i++) {
        const infoWrapper = createElWithClass('info-wrapper')
        const infoLvl = createElWithClass('info-lvl')
        infoLvl.innerText = `LVL: ${i}`
        infoDescription.append(infoWrapper)
        infoWrapper.append(infoLvl)
        const infoIncomeWrap = createElWithClass('info-income-wrap')
        infoWrapper.append(infoIncomeWrap)

        const upgrades = calculateUpgrades(buildings[buildingKey].upgrades, i)
        for (const income in upgrades) {
            const infoIncome = createElWithClass('')


            infoIncomeWrap.append(infoIncome)
            switch (income) {
                case 'metal':

                    infoIncome.innerText = `${upgrades[income]}/s`
                    infoIncome.classList.add('item-cost-metal')
                    break;
                case 'polimer':
                    infoIncome.classList.add('item-cost-polimer')
                    infoIncome.innerText = `${upgrades[income]}/s`

                    break;
                case 'gas':
                    infoIncome.innerText = `${upgrades[income]}/s`
                    infoIncome.classList.add('item-cost-gas')
                    break;
                case 'sp':

                    break;

                default:
                    break;
            }
            infoIncome.classList.add('info-income')
        }

        infoDescription.append(infoWrapper)
    }


    menuItem.append(itemTitle, itemImg, itemDiscription, itemButton, itemInfoBtn)
    itemDetais.append(itemCostMetal, itemCostPolimer, itemCostGas, itemBuildTime)
    itemDiscription.append(itemDetais)
    menuItem.append(infoDescription)
    return menuItem
}


export {
    drawBuildingMenuItem
}