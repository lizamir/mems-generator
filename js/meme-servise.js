'use strict'

var gImgsSearch = [];

//var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['all', 'angry', 'minister'] },
    { id: 2, url: 'img/2.jpg', keywords: ['all', 'love', 'happy', 'dog', 'sweet'] },
    { id: 3, url: 'img/3.jpg', keywords: ['all', 'happy , dog , baby , love , sweet'] },
    { id: 4, url: 'img/4.jpg', keywords: ['all', 'cat', 'sleep', 'sweet'] },
    { id: 5, url: 'img/5.jpg', keywords: ['all', 'angry', 'baby'] },
    { id: 6, url: 'img/6.jpg', keywords: ['all', 'smart', 'happy', 'man'] },
    { id: 7, url: 'img/7.jpg', keywords: ['all', 'baby', 'sweet'] },
    { id: 8, url: 'img/8.jpg', keywords: ['all', 'smart', 'happy', 'man'] },
    { id: 9, url: 'img/9.jpg', keywords: ['all', 'laugh', 'happy', 'baby'] },
    { id: 10, url: 'img/10.jpg', keywords: ['all', 'laugh', 'minister', 'man'] },
    { id: 11, url: 'img/11.jpg', keywords: ['all', 'kiss', 'win', 'happy', 'love', 'man'] },
    { id: 12, url: 'img/12.jpg', keywords: ['all', 'man', 'smart', 'question'] },
    { id: 13, url: 'img/13.jpg', keywords: ['all', 'actor', 'love', 'smart'] },
    { id: 14, url: 'img/14.jpg', keywords: ['all', 'actor', 'angry', 'smart'] },
    { id: 15, url: 'img/15.jpg', keywords: ['all', 'actor', 'happy', 'smart'] },
    { id: 16, url: 'img/16.jpg', keywords: ['all', 'actor', 'laugh'] },
    { id: 17, url: 'img/17.jpg', keywords: ['all', 'man', 'minister'] },
    { id: 18, url: 'img/18.jpg', keywords: ['all', 'afraid', 'man'] },
];
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
            txt: 'first line',
            size: 40,
            align: 'center',
            color: 'white',
            pos: {
                x: 230,
                y: 100
            },
        },
        {
            txt: 'second line',
            size: 40,
            align: 'left',
            color: 'white',
            pos: {
                x: 230,
                y: 400
            },
        },

    ]
};

function getCurrLine(id) {
    return gMeme.lines[id]
}

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
    if (!curMeme) {
        gMeme.lines.push({
            txt: 'third line',
            size: 40,
            align: 'left',
            color: 'red',
            pos: {
                x: 250,
                y: 250
            },
        })
    }
}

function getImgById(imgId) {
    gMeme.selectedImgId = imgId;
    var img = gImgs.find(img => {
        return imgId === img.id;
    })
    return img;
}

function setText(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text;
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

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
}

function getImgSearch() {
    return gImgsSearch;
}


function setImagesSearch(inputSearch) {
    console.log('inputSearch', inputSearch);
    console.log('gImgs:', gImgs)
    let imgs = gImgs.filter((img) => {
        return img.keywords.includes(inputSearch)
    });
    gImgsSearch = imgs;
    console.log('imgs', gImgsSearch);

}