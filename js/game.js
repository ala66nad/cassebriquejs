import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./config.js";
import Block from "./class/Block.js";
import Circle from "./class/Circle.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const block = new Block({
    position: { x: 0 * 16, y: 0 * 16 },
    height: 16
});

const circle = new Circle({
    position: { x: 16, y: 16 },
    width: 8
})

const start = () => {
    window.requestAnimationFrame(start);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    circle.update(ctx);
}

start();