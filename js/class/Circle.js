import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../config.js";

export default class Circle {
        
    constructor({ position, width = 16 }) {
        this.position = position;
        this.velocity = {
            x: 5,
            y: 5
        };
        this.width = width;
        this.color = 'rgba(255, 0, 0, 0.5)';
    }

    update(ctx) {
        this.chekForCollisions();
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

}