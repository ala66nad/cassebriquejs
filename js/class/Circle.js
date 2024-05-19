import { CANVAS_HEIGHT, CANVAS_WIDTH,  BLOCK } from "../config.js";

export default class Circle {
        
    constructor({ position, width = BLOCK }) {
        this.position = position;
        this.velocity = { x: 0, y: 0 };
        this.width = width;
        this.color = 'rgba(255, 0, 0, 0.5)';
    }

    update(ctx, block) {
        this.chekForCollisions();
        this.chekForBlockCollisions(block);
        this.move();
        this.draw(ctx);
    }

    draw(ctx) {        
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI);
        ctx.fill();        
    }

    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    chekForCollisions() {
        this.chekForHorizontalCollisions();
        this.chekForVerticalCollisions();
    }

    chekForVerticalCollisions() {
        if (this.position.y >= CANVAS_HEIGHT || this.position.y <= 0) {
            this.velocity.y = -this.velocity.y;
            this.color = 'rgba(0, 255, 0, 0.5)';
        }
    }

    chekForHorizontalCollisions() {
        if (this.position.x >= CANVAS_WIDTH || this.position.x <= 0) {
            this.velocity.x = -this.velocity.x;
            this.color = 'rgba(255, 0, 0, 0.5)';
        }
    }

    chekForBlockCollisions(block) {  
        let angle = 4;
        if (this.position.x > block.position.x && 
            this.position.x < block.position.x + block.width &&
            this.position.y + this.width > block.position.y &&
            this.position.y - this.width < block.position.y + block.height
        ) {
            this.velocity.y = -this.velocity.y;            
            this.velocity.x = Math.ceil(((this.position.x - block.position.x) - (block.width / 2)) / angle);            
        }
    }
}
