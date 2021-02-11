'use strict'


var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'img/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'img/3.jpg', keywords: ['happy'] },
    { id: 4, url: 'img/4.jpg', keywords: ['happy'] },
    { id: 5, url: 'img/5.jpg', keywords: ['happy'] },
    { id: 6, url: 'img/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'img/7.jpg', keywords: ['happy'] },
    { id: 8, url: 'img/8.jpg', keywords: ['happy'] },
    { id: 9, url: 'img/9.jpg', keywords: ['happy'] },
    { id: 10, url: 'img/10.jpg', keywords: ['happy'] },
    { id: 11, url: 'img/11.jpg', keywords: ['happy'] },
    { id: 12, url: 'img/12.jpg', keywords: ['happy'] },
    { id: 13, url: 'img/13.jpg', keywords: ['happy'] },
    { id: 14, url: 'img/14.jpg', keywords: ['happy'] },
    { id: 15, url: 'img/15.jpg', keywords: ['happy'] },
    { id: 16, url: 'img/16.jpg', keywords: ['happy'] },
    { id: 17, url: 'img/17.jpg', keywords: ['happy'] },
    { id: 18, url: 'img/18.jpg', keywords: ['happy'] },
];
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
            txt: 'I never eat Falafel',
            size: 40,
            align: 'center',
            color: 'black',
            pos: {
                x: 250,
                y: 100
            },
        },
        {
            txt: '',
            size: 40,
            align: 'left',
            color: 'red',
            pos: {
                x: 250,
                y: 400
            },
        }
    ]
};

function getImages() {
    return gImgs;
}

function getMeme() {
    return gMeme;
}

function getLines() {
    return gMeme.lines;
}

function getImgById(imgId) {
    var img = gImgs.find(img => {
        return imgId === img.id;
    })
    return img;
}

function setText(text, idx) {
    gMeme.lines[idx].txt = text;
}

function setTextSize(line, diff) {
    line.size += diff;
}

function setMoveLine(line, diff) {
    line.pos.y += diff;
}

function getLineSelected() {
    return gMeme.lines[gMeme.selectedLineIdx];
}

function setSelectedLineIdx(idx) {
    gMeme.selectedLineIdx = idx;
    console.log(gMeme.selectedLineIdx);

}

function createLine(pos) {
    let line = {
        txt: 'looo',
        size: 40,
        align: 'center',
        color: 'black',
        pos: pos
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    console.log('line', line);
}