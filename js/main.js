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

    <section class="canvas-container main-container">
    <canvas id="meme-canvas" height="450" width="450"> <img class="img-canvas" src="${img.url}"></canvas>
    </section>
    <section class="editor-container">
    </section>
    `

    let elDesignPart = document.querySelector('.meme-editor');
    elDesignPart.innerHTML = strHtml;
    resizeCanvas();
    drawImg();

}

function drawImg() {
    const elImg = document.querySelector('.img-canvas');
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
}

function resizeCanvas() {
    const elCanvasContainer = document.querySelector('.canvas-container');
    gElCanvas = document.getElementById('meme-canvas');
    gCtx = gElCanvas.getContext('2d');
    gElCanvas.width = elCanvasContainer.offsetWidth;
    gElCanvas.height = elCanvasContainer.offsetHeight;
}