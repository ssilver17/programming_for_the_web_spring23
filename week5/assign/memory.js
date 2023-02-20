const DOWN = "down";
const UP = "up";
let startingX = 60;
let startingY = 250;
let cards = [];
const gameState = {

};
let cardFaceArray = [];
let cardBack;

function preload() {
    cardBack = loadImage("images/cardback.png");
    cardFaceArray = [
        loadImage("images/bird01.jpg"),
        loadImage("images/bird02.jpg"),
        loadImage("images/bird03.jpg"),
        loadImage("images/bird04.jpg"),
        loadImage("images/bird05.jpg"),
        loadImage("images/bird06.jpg"),
        loadImage("images/bird07.jpg"),
        loadImage("images/bird09.jpg")
    ]
}
function setup() {
    createCanvas(900, 1060);
    background("#042152");
    noStroke(); 
    let selectedFaces = [];
    for(let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIdx];
        selectedFaces.push();
        selectedFaces.push();
        //remove the used cardface so it doesn't get ramdomly seleced again
        cardFaceArray.splice(randomIdx, 1);
    }
    for(let j = 0; j< 4; j++) {
        for(let i = 0; i < 4; i++) {   
            const faceImage = selectedFaces.pop();                 
            cards.push(new Card(startingX, startingY, faceImage)); 
            startingX += 210;                       
    }
    startingY +=200;
    startingX = 60;   //sets starting location for newrow                    
    } 
}

function mousePressed() {
    for(let k = 0; k < cards.length; k++) {     //loop thru cards
        if(cards[k].didHit(mouseX, mouseY)) {
            console.log("flipped", cards[k]);
        }
    }
}

class Card {
    constructor(x, y, cardFaceImg) {             //parameters to change card positions
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 150;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.show();
    }

    show () {
        if(this.face === DOWN) {
            fill("#bef2f9");
            square(this.x, this.y, this.width, 20);
            image(cardBack, this.x, this.y, this.width, this.height);
        } else {
            fill("#aaa");
            square(this.x, this.y, this.width, 20);
            image(cardBack, this.x, this.y, this.width, this.height);
        }
       
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && 
            mouseY >= this.y && mouseY <= this.y + this.width) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }
    flip () {
        if(this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}
