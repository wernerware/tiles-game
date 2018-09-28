import { Injectable } from '@angular/core';
import {BoardComponent} from "../board/board.component";

@Injectable({
  providedIn: 'root',
})
export class BoardGenerator {

  private palette : Array<string> = ["#396AB1", "#3E9651", "#94CA6B", "#DA7C30", "#F1A75C", "#922428"];

  constructor() { }

  generate(displayBoard : BoardComponent) : Array<Array<string>> {
    let displayValues = new Array<Array<string>>();
    for(let j = 0; j < displayBoard.height; j++){
      displayValues.push(new Array<string>());
      for(let i = 0; i < displayBoard.width; i++){
        let index = Math.floor(Math.random()*this.palette.length);
        displayValues[j][i] = this.palette[index];
      }
    }

    return displayValues;
  }

  getPalette() : Array<string> {
    return this.palette;
  }
}
