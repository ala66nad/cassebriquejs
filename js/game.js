import { CANVAS_HEIGHT, CANVAS_WIDTH, BLOCK, DEMI_BLOCK } from "./config.js";
import Bar from "./class/Bar.js";
import Circle from "./class/Circle.js";

let run = false;
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const keys = {
    ArrowRight: { pressed: false },
    ArrowLeft: { pressed: false },
    Space: { pressed: false },
}

const bar = new Bar({
    position: { x: CANVAS_WIDTH / 2 - 32, y: CANVAS_HEIGHT - 2 * BLOCK },
    height: DEMI_BLOCK
});

const circle = new Circle({
    position: { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT - 2.5 * BLOCK },
    width: DEMI_BLOCK
})

const start = () => {
    window.requestAnimationFrame(start);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    bar.onKeyPressed(keys);
    circle.update(ctx, bar);
    bar.update(ctx);
    if (keys.Space.pressed && run === false) {
        run = true;
        circle.velocity.y = -DEMI_BLOCK/2
    }
}

start();

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            break;
        case ' ':
            keys.Space.pressed = true;
            break;
        default:
            console.log(`${e.key}`);
    }
});

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break;
        case ' ':
            keys.Space.pressed = false;
            break;
        default:
            console.log(`${e.key}`);
    }
});
