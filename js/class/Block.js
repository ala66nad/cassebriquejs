import { BLOCK } from "../config.js";

export default class Block {
    constructor(position, height = BLOCK, color) {
        this.position = position;
        this.width = BLOCK;
        this.height = height;        
        this.color = this.color;        
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
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
