import { CANVAS_HEIGHT, CANVAS_WIDTH, BLOCK, DEMI_BLOCK } from "./config.js";
import Bar from "./class/Bar.js";
import Circle from "./class/Circle.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const keys = {
    ArrowRight: { pressed: false },
    ArrowLeft: { pressed: false }
}

const bar = new Bar({
    position: { x: CANVAS_WIDTH / 2 - 32, y: CANVAS_HEIGHT - 2 * BLOCK },
    height: DEMI_BLOCK
});

const circle = new Circle({
    position: { x: BLOCK, y: BLOCK },
    width: DEMI_BLOCK
})

const start = () => {
    window.requestAnimationFrame(start);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //bar.velocity.x = 0;
    bar.onKeyPressed(keys);
    circle.update(ctx, bar);
    bar.update(ctx);
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
    }
});