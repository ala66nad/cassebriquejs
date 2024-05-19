import { CANVAS_HEIGHT, CANVAS_WIDTH, DEMI_BLOCK } from "../config.js";

export default class Circle {
        
    constructor({ position, width = 16 }) {
        this.position = position;
        this.velocity = {
            x: 0, //DEMI_BLOCK / 2,
            y: DEMI_BLOCK / 2
        };
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
        if (this.position.x  > block.position.x && 
            this.position.x < block.position.x + block.width &&
            this.position.y > block.position.y &&
            this.position.y < block.position.y + block.height
        ) {
            this.velocity.y = -this.velocity.y;            
            this.velocity.x = Math.ceil(((this.position.x - block.position.x) - (block.width / 2)) / angle);
            console.log(Math.ceil(((this.position.x - block.position.x) - (block.width / 2)) / angle));
        }
    }


}
