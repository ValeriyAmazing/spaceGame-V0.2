 function timerStart(endOfprocess, element, callback) {
     requestAnimationFrame(KeepUdateTimer)

     function KeepUdateTimer() {
         const now = Date.now()
         if (now > endOfprocess) {
             callback()
             return
         }
         element.innerHTML = timeFormatted(endOfprocess - now)
         requestAnimationFrame(KeepUdateTimer)
     }
 }

 function timeFormatted(ms) {
     let sec = ms % 60000 / 1000 | 0
     let minutes = (ms / 60000) % 60 | 0
     let hours = ms / (60000 * 60) % 24 | 0
     let days = ms / (60000 * 60 * 24) | 0
     return `${String(days).padStart(2, 0) }:${String(hours).padStart(2, 0) }:${String(minutes).padStart(2, 0) }:${String(sec).padStart(2,0)}`
 }
export { timerStart, timeFormatted }