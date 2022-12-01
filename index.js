let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")

let hScoreEl = document.getElementById("homeScore")
let gScoreEl = document.getElementById("guestScore")

let hScore = 0
let gScore = 0

function hplusX(x) {
    hScore += x
    hScoreEl.textContent = hScore
}

function gplusX(x) {
    gScore += x
    gScoreEl.textContent = gScore
}