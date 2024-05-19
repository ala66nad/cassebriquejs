import { BLOCK } from "../config.js";

export default class Block {
    constructor({ position, height = BLOCK }) {
        this.position = position;
        this.width = BLOCK;
        this.height = height;        
    }

    draw(ctx) {
        ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(ctx) {        
        this.move();
        this.draw(ctx);
    }

    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}
