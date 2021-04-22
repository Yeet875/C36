var database;
var playercount;
var canvas,backgroundImage
var gamestate =0
var form,player,game

function setup(){
canvas = createCanvas(500,500);
database = firebase.database();
game=new Game();
game.getState()
game.start()
}

function draw(){

  
}

