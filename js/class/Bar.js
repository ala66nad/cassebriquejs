import { CANVAS_HEIGHT, CANVAS_WIDTH, DEMI_BLOCK, DEMI_CANVAS_WIDTH, TWO_BLOCK } from "../config.js";
import Block from "./Block.js";
import Color from "./Color.js";

const LEN = 96 ;
const DEMI_LEN = LEN / 2;

export default class Bar extends Block {    
    constructor() {                
        super({ x: DEMI_CANVAS_WIDTH - DEMI_LEN , y: CANVAS_HEIGHT - TWO_BLOCK }, DEMI_BLOCK / 2);
        this.velocity = { x: 0, y: 0 };
        this.width = LEN;
        this.color = Color.hex("#0000FF").withAlpha(0.5).toRgba()
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