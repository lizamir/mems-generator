'use strict'

var gElCanvas;
var gCtx;
var gCurrWord;
var gIsSearchImg = false;

function init() {
    renderImages();

}

function renderImages() {
    if (gIsSearchImg) {
        var images = getImgSearch();
    } else {

        var images = getImages()
    }
    console.log('images', images);
    let strHtml = images.map((img) => {
        return `
        <div class = "pic img-${img.id}" onclick = "renderDesign(${img.id})"> <img src="${img.url}" alt="img-${img.id}"> </div>
        `;
    })
    document.querySelector('.image-gallery').innerHTML = strHtml.join('')

}


function renderDesign(imgId = getMeme().selectedImgId) {
    document.querySelector('.image-gallery').style.display = 'none';
    document.querySelector('.person-container').style.display = 'none';
    document.querySelector('.search-nav').style.display = 'none';
    document.querySelector('.meme-editor').style.display = 'flex';
    let img = getImgById(imgId);
    let strHtml = `
    <canvas id="meme-canvas" height="450" width="450"> <img class="img-canvas" src="${img.url}"></canvas>
    `
    let elDesignPart = document.querySelector('.canvas-container');
    elDesignPart.innerHTML = strHtml;
    renderCanvas();
    resizeCanvas();
    drawImg();
    renderLines()
}

function renderLines() {
    let memText = getMeme();
    memText.lines.forEach((line, idx) => drawText(idx))
}

function drawText(idx) {
    let line = getCurrLine(idx)
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px IMPACT`;
    gCtx.textAlign = 'center'
    gCtx.fillText(line.txt, line.pos.x, line.pos.y)
    gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
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
    if (!memText.selectedLineIdx) {
        let text = document.querySelector('input[name=line0]').value;
        setText(text, 0);
    }
    drawText(0);
    if (memText.selectedLineIdx) {
        let text = document.querySelector('input[name=line0]').value;
        setText(text, 1);
    }
    drawText(1);
}



function onChangeFontSize(diff) {
    let line = getLineSelected();
    setTextSize(line, diff);
    onfocusText();
}

function onMoveLines(diff) {
    let line = getLineSelected();
    setMoveLine(line, diff);
    onfocusText();
}

function onAddLine() {
    renderCanvas();
    onfocusText();
    setSelectedLineIdx(1);
    cleanInputText();
}

function cleanInputText() {
    const memeText = document.getElementById('line')
    memeText.value = ''
    console.log('memeText', memeText);
}

function onChangeFocusLine() {

    let memeText = getMeme();
    renderDesign(memeText.selectedImgId)
    if (memeText.selectedLineIdx) {

        gCtx.rect(memeText.lines[0].pos.x - 200, memeText.lines[0].pos.y - 40, 400, 50);
        setSelectedLineIdx(0);

    } else {

        gCtx.rect(memeText.lines[1].pos.x - 200, memeText.lines[1].pos.y - 40, 400, 50);
        setSelectedLineIdx(1);
    }
    gCtx.strokeStyle = 'black';
    gCtx.stroke();

    let strHtml = `<input type="text" name = "line${memeText.selectedLineIdx}" class="meme-text" onkeyup="onfocusText()" ></input>`;
    document.querySelector('.meme-text-container').innerHTML = strHtml;
    document.querySelector(`input[name=line${memeText.selectedLineIdx}]`).value = `${memeText.lines[memeText.selectedLineIdx].txt}`;
}


function onfocusText() {
    renderCanvas();
    drawImg();
    let text = document.querySelector('.meme-text').value;
    setText(text);

    renderDesign();
}

function onChangeColor(ev) {
    setColor(ev.value);
    onfocusText();
    console.log('ev.value', ev.value);
}

function onChangeAline(aline) {
    setAlignment(aline)
    onfocusText();
}

function onDeleteLines() {
    deleteLine()
    renderDesign(getMeme().selectedImgId);
}


function openGallery() {
    document.querySelector('.image-gallery').style.display = 'grid';
    document.querySelector('.meme-editor').style.display = 'none';
    document.querySelector('.person-container').style.display = 'none';
    document.querySelector('.search-nav').style.display = 'flex';
    renderImages();

}

function openAbout() {
    document.querySelector('.image-gallery').style.display = 'none';
    document.querySelector('.meme-editor').style.display = 'none';
    document.querySelector('.person-container').style.display = 'flex';
    document.querySelector('.search-nav').style.display = 'none';
}

function onSearchImg(evVal) {
    gIsSearchImg = true;
    setImagesSearch(evVal);
    console.log(evVal, 'elVal');
    renderImages();
}

function onDownload(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
}


/////mobile//////////

function toggleMenu() {
    document.body.classList.toggle('open')
}


function onOpenModal() {
    console.log(elModal, 'elModal');
    var elModal = document.querySelector('.modal')
    elModal.hidden = false;
}


function onCloseModal() {
    document.querySelector('.modal').hidden = true
}