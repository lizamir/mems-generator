'use strict'

var gElCanvas;
var gCtx;

function init() {
    renderImages();

}

function renderImages() {
    let images = getImages()
    let strHtml = images.map((img) => {
        return `
        <div class = "pic img-${img.id}" onclick = "renderDesign(${img.id})"> <img src="${img.url}" alt="img-${img.id}"> </div>
        `;
    })
    document.querySelector('.image-gallery').innerHTML = strHtml.join('')

}


function renderDesign(imgId) {
    document.querySelector('.image-gallery').classList.add("hide");
    document.querySelector('.meme-editor').classList.add("display-flex");
    let img = getImgById(imgId);
    let strHtml = `
    <canvas id="meme-canvas" height="450" width="450"> <img class="img-canvas" src="${img.url}"></canvas>
    `
    let elDesignPart = document.querySelector('.canvas-container');
    elDesignPart.innerHTML = strHtml;
    renderCanvas();
    resizeCanvas();
    drawImg();
    let memText = getMeme();
    drawText(gMeme.lines[memText.selectedLineIdx].txt, `${memText.lines[0].size}`, gElCanvas.width / 2, `${memText.lines[0].pos}`)
}

function drawImg() {
    const elImg = document.querySelector('.img-canvas');
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
}

function renderCanvas() {
    gElCanvas = document.getElementById('meme-canvas');
    gCtx = gElCanvas.getContext('2d');
}

function resizeCanvas() {
    const elCanvasContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elCanvasContainer.offsetWidth;
    gElCanvas.height = elCanvasContainer.offsetHeight;
}

function onSetText() {
    renderCanvas();
    drawImg();
    let memText = getMeme();
    let text = document.querySelector('input[name=line]').value;
    setText(text, 0);
    drawText(text, `${memText.lines[0].size}`, gElCanvas.width / 2, `${memText.lines[0].pos}`);
}

function drawText(text, size, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = `${size}px IMPACT`;
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onChangeFontSize(diff) {
    var line = getLineSelected();
    setTextSize(line, diff);
    onSetText()
}

function onMoveLines(diff) {
    var line = getLineSelected();
    setMoveLine(line, diff);
    onSetText();
}