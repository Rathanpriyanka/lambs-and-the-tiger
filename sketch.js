var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allTiger,allGoats;
var goatCount;
var database;

var form, player, game;

var Bg;

function preload(){
 // Bg = loadImage("images/BG.png")
  
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
if(player1.isTouching(button2)){
    button2.hide();

}





}
