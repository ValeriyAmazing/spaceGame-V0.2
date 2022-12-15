import { container } from "../app.js";
import { createElWithClass } from "./drawPlanet.js";

const errorWraper = createElWithClass('error-wrapper')
const errorMessage = createElWithClass('error-message')
const errorBtn = createElWithClass('error-btn', 'button')
errorWraper.classList.add('hide')
errorBtn.innerText = 'OK'
errorBtn.addEventListener('click', () => {
    errorWraper.classList.add('hide')

})
errorWraper.append(errorMessage,errorBtn)


function showMessageError(textToShow) {
    
    errorMessage.innerText = textToShow
    errorWraper.classList.remove('hide')
}


export { errorWraper, errorMessage, errorBtn, showMessageError }