import { CANVAS_WIDTH, DEMI_BLOCK } from "../config.js";
import Block from "./Block.js";

export default class Bar extends Block {
    constructor({ position, width = 64, height = 16 }) {
        super(position, height);
        this.position = position;
        this.width = width;
        this.height = height;
        this.velocity = { x: 0, y: 0 };
    }

    onKeyPressed(keys) {
        if (keys.ArrowRight.pressed) {
            if (this.position.x < CANVAS_WIDTH - this.width - this.velocity.x) {
                this.velocity.x += DEMI_BLOCK / 4;
            } else {
                this.velocity.x = 0;
            }
        }
        else if (keys.ArrowLeft.pressed) {
            if (this.position.x > 0 - this.velocity.x) {
                this.velocity.x -= DEMI_BLOCK / 4;
            } else {
                this.velocity.x = 0;
            }
        }else {
            this.velocity.x = 0;
        }
    }

}