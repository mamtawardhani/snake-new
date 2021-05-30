const canvas = document.getElementById("snake")
const perm = canvas.getContext("2d")

let d;

let gi = new Image()
gi.src="ground.png"

let fi=new Image()
fi.src="food.png"

let food={
    x:Math.floor(Math.random()*15)*32,
    y:Math.floor(Math.random()*17)*32
}

let snake=[]
snake[0]={x:3*32, y:6*32}

document.addEventListener("keydown", move)

function move(event){

    if(event.keyCode===37){
        d="left"
    }
    else if(event.keyCode===38){
        d="up"
    }
    else if(event.keyCode===39){
        d="right"
    }

    else if(event.keyCode===40){
        d="down"
    }
}

function omg(){

    perm.drawImage(gi,0,0)
    perm.drawImage(fi, food.x, food.y)

   for(var i=0; i<snake.length;i++){
       perm.fillStyle=(i===0)?"green":"white"
       perm.strokeStyle="red"
    perm.fillRect(snake[i].x, snake[i].y,32,32)
    
   }

   let snakeX= snake[0].x
   let snakeY=snake[0].y

    //snake.pop()

if(d==="left"){
    snakeX-=32
}
if(d==="right"){
    snakeX+=32
}
if(d==="up"){
    snakeY-=32
}
if(d==="down"){
    snakeY+=32
}

let NewHead={
    x:snakeX,y:snakeY
}

snake.unshift(NewHead)

if(snake[0].x === food.x && snake[0].y===food.y){
    food={
        x:Math.floor(Math.random()*15)*32,
        y:Math.floor(Math.random()*17)*32
    }
}

else{
    snake.pop()
}

}

setInterval(omg, 100)
