import { createElWithClass } from "./drawPlanet.js"

    const planetMenuItems = createElWithClass('planet-menu')
    const planetMenuWrapper = createElWithClass('planet-menu-wrapper')
    const closeBtn = document.createElement('button')
    closeBtn.classList.add('planet-menu-close-btn')
    closeBtn.innerText = `<`
    closeBtn.addEventListener('click', () => {
        planetMenuWrapper.classList.toggle('planet-menu-active')
        planetMenuItems.innerHTML = ''
    })

    planetMenuWrapper.append(closeBtn, planetMenuItems)
export { planetMenuItems, planetMenuWrapper, closeBtn }