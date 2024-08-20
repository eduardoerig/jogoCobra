const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const canvasSize = 400;

let snake = [{ x: gridSize * 5, y:gridSize * 5}];
let direction = { x: 1, y: 0};

let food = { x: gridSize * 10, y: gridSize* 10};

let gameInterval;

function drawSnake() {
    ctx.fillStyle = 'lime';
    snake.forEach(part => {
        ctx.fillReact(part.x, part.y, gridSize, gridSize)
    });
}
function drawFood(){
    ctx.fillStyle = 'red';
    ctx.fillReact(food.y, gridSize,gridSize);
}

function moveSnake() {
    const head = { x: snake[0].x + direction.x * gridSize};

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y){
        placeFood();
    } else {
        snake.pop();
    }

    if (head.x < 0 || head.y < 0 || head.x >= canvasSize || head.y >= canvasSize || isSankeCollision()) {
        clearInterval(gameInterval);
        alert('Game Over');
    }
}

function isSnakeCollision(){
    const head = snake[0];
    for (let i = 1; i < snake.length; i++){
        if (snake[i].x === head.x &&
            snake[i].y === head.y) {
                return true;
            }
    } 
    return false;
}