var sketchW, sketchH;
let bgImage, startImage, stopImage;
let state;
var a;
let test;


function preload() {
    bgImage = loadImage('assets/background.png');
    playImage = loadImage('assets/play.png');
    stopImage = loadImage('assets/stop.png');
}

function setup() {
    canvas = createCanvas(100, 100);
    canvas.parent('sketch-holder');
    resizeHolder();
    resizeCanvas(sketchW, sketchH);

    bgImage.resize(sketchW, sketchH);
    playImage.resize(sketchW, sketchH);
    stopImage.resize(sketchW, sketchH);
    
    image(bgImage, 0, 0);
    image(playImage, 0, 0);
    image(stopImage, 0, 0);

    state = false;
    test = 0;
}

function draw() {
    image(bgImage, 0, 0);

    if(mouseIsPressed & isClicked()){
        a = 200;
    }else{
        a = 255;
    }

    tint(255, a);
    if(state){
        image(stopImage, 0, 0);
    }else{
        image(playImage, 0, 0);
    }
}

function mouseClicked(){
    if(isClicked()){
        state = !state;
    }
}

function isClicked(){
    return alpha(playImage.get(mouseX, mouseY)) > 0? true: false;
}

function windowResized() {
    resizeHolder();
    resizeCanvas(sketchW, sketchH);

    bgImage.resize(sketchW, sketchH);
    playImage.resize(sketchW, sketchH);
    stopImage.resize(sketchW, sketchH);
};

function resizeHolder() {
    sketchW = select('#sketch-holder').width;
    sketchH = select('#sketch-holder').height;
}