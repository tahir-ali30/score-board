let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")

let hScoreEl = document.getElementById("homeScore")
let gScoreEl = document.getElementById("guestScore")

let hScore = 0
let gScore = 0

function hplus1() {
    hScore += 1
    hScoreEl.textContent = hScore
}

function hplus2() {
    hScore += 2
    hScoreEl.textContent = hScore
}

function hplus3() {
    hScore += 3
    hScoreEl.textContent = hScore
}

function gplus1() {
    gScore += 1
    gScoreEl.textContent = gScore
}

function gplus2() {
    gScore += 2
    gScoreEl.textContent = gScore
}

function gplus3() {
    gScore += 3
    gScoreEl.textContent = gScore
}
