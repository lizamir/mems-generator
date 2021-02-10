'use strict'

function init() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')

}

function drawImg() {
    const elImg = document.querySelector('img')
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}