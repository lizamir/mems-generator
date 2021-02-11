'use strict'


var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['angry , minister'] },
    { id: 2, url: 'img/2.jpg', keywords: ['love , happy , dog , sweet'] },
    { id: 3, url: 'img/3.jpg', keywords: ['happy , dog , baby , love , sweet'] },
    { id: 4, url: 'img/4.jpg', keywords: ['cat, sleep , sweet'] },
    { id: 5, url: 'img/5.jpg', keywords: ['angry, baby'] },
    { id: 6, url: 'img/6.jpg', keywords: ['smart, happy , man'] },
    { id: 7, url: 'img/7.jpg', keywords: ['baby , sweet'] },
    { id: 8, url: 'img/8.jpg', keywords: ['smart, happy , man'] },
    { id: 9, url: 'img/9.jpg', keywords: ['laugh , happy , baby'] },
    { id: 10, url: 'img/10.jpg', keywords: ['laugh , minister, man'] },
    { id: 11, url: 'img/11.jpg', keywords: ['kiss , win , happy ,love , man'] },
    { id: 12, url: 'img/12.jpg', keywords: ['man , smart , question'] },
    { id: 13, url: 'img/13.jpg', keywords: ['actor , love , smart'] },
    { id: 14, url: 'img/14.jpg', keywords: ['actor , angry , smart'] },
    { id: 15, url: 'img/15.jpg', keywords: ['actor , happy ,smart'] },
    { id: 16, url: 'img/16.jpg', keywords: ['actor , laugh'] },
    { id: 17, url: 'img/17.jpg', keywords: ['man , minister'] },
    { id: 18, url: 'img/18.jpg', keywords: ['afraid , man '] },
];
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
            txt: 'I never eat Falafel',
            size: 40,
            align: 'center',
            color: 'white',
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

function addLine() {
    let curMeme = gMeme.lines.length - 1;
    if (!curMeme) {}
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
    line.pos.y -= diff;
}

function getLineSelected() {
    return gMeme.lines[gMeme.selectedLineIdx];
}

function setSelectedLineIdx(idx) {
    gMeme.selectedLineIdx = idx;

}

function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color;
}

// function setSwitchLines() {
//     [gMeme.lines[0], gMeme.lines[1]] = [gMeme.lines[1], gMeme.lines[0]];
// }

function setFocusLine() {
    gMeme.selectedLineIdx++
        if (gMeme.selectedLineIdx >= gMeme.lines.length) {
            gMeme.selectedLineIdx = 0
        }
}

function setAlignment(aliment) {
    switch (aliment) {
        case 'left':
            gMeme.lines[gMeme.selectedLineIdx].pos.x = 90;
            break;
        case 'center':
            gMeme.lines[gMeme.selectedLineIdx].pos.x = 230;
            break;
        case 'right':
            gMeme.lines[gMeme.selectedLineIdx].pos.x = 350;
            break;

    }
}