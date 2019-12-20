
// GLOBAL VARIABLE

var canvas;
var ctx;
var height;
var width;
let x = 0;
var player;
var wordBlock = [];
// FIN GLOBAL VARIABLE

function setup() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.stroke();
    height = canvas.height;
    width = canvas.width;
    player = new Player();
    wordBlock.push(new StandardBlock(0,900));
    wordBlock.push(new StandardBlock(150,900));

    wordBlock.push(new StandardBlock(400 ,800));
    wordBlock.push(new StandardBlock(600 ,800));
    wordBlock.push(new StandardBlock(700 ,700));
    wordBlock.push(new StandardBlock(300 ,700));
    wordBlock.push(new StandardBlock(500 ,900));
    mainLoop();
}

function mainLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //
    // ctx.fillStyle = "#39ff53";
    // ctx.fillRect(++x, 0, 50, 75);
    player.draw();
    drawAll(wordBlock);

    setTimeout(mainLoop,20);
}


