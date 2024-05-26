import { BLOCK } from "../config.js";

export default class Block {
    constructor(position, color, height = BLOCK, width = BLOCK) {
        this.position = position;
        this.width = width;
        this.height = height;        
        this.color = color;
        this.velocity = {x:0, y:0};
        this.visible = true;
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
