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

function reset(){
    hScore.textContent = 0
    gScore.textContent = 0
}