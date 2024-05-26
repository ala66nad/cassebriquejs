import { BLOCK, CANVAS_WIDTH, DEMI_BLOCK, TWO_BLOCK } from "../config.js";
import Block from "./Block.js";

export default class Wall {

    constructor(rows) {
        this.blocks = [];
        let row = TWO_BLOCK;
        let l = Math.ceil(CANVAS_WIDTH / (TWO_BLOCK + DEMI_BLOCK / 2)) - 1;
        let blocksCount = l * rows;
        for (let i = 0; i < blocksCount; i++) {
            const col = BLOCK + (TWO_BLOCK + DEMI_BLOCK / 2) * (i % l);
            row +=  (i % l === 0) ? TWO_BLOCK : 0;
            const color = i % 2 ? "#FF00FF" : "#FFFF00" ;
            const block = new Block({ x: col, y: row}, color, BLOCK, TWO_BLOCK );
            this.blocks.push(block);
        }
    }

    update(ctx) {
        for (const block of this.blocks.filter(b =>  b.visible)) {
            block.update(ctx);
        }       
    }
}