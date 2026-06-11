const resetb = document.getElementById('resetb')
const startb = document.getElementById('startb')
const pauseb = document.getElementById('pauseb')

const milisect = document.getElementById('milisec')
const sect = document.getElementById('sec')
const mint = document.getElementById('min')
const hourt = document.getElementById('hour')

startb.addEventListener('click', start)
resetb.addEventListener('click', reset)
pauseb.addEventListener('click', pause)

let interval = null
let hour = 0
let min = 0
let sec = 0
let milisec = 0

function start(){
    changebuttoncolor('start')
    if(interval) return

    interval = setInterval(() => {
        milisec++

        if(milisec > 99){
            milisec = 0
            sec++
        }

        if(sec > 59){
            sec = 0
            min++
        }

        if(min > 59){
            min = 0
            hour++
        }


        updateDisplay()
    }, 10)
}

function reset(){
    changebuttoncolor('reset')
    clearInterval(interval)

    hour = 0
    min = 0
    sec = 0
    milisec = 0

    updateDisplay()
}

function pause(){
    changebuttoncolor('pause')
    clearInterval(interval)
    interval = null
}

function updateDisplay(){
    milisect.textContent =
        milisec < 10 ? '0' + milisec : milisec
    sect.textContent =
        sec < 10 ? '0' + sec : sec
    mint.textContent =
        min < 10 ? '0' + min : min
    hourt.textContent =
        hour < 10 ? '0' + hour : hour
}

function changebuttoncolor(buttonName){
    resetb.classList.remove('active-button')
    startb.classList.remove('active-button')
    pauseb.classList.remove('active-button')

    document.getElementById(buttonName + 'b')
    .classList.add('active-button')
}