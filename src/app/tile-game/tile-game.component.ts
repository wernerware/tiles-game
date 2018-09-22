import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TileClickEvent} from "../board/tileClickEvent";
import {BoardComponent} from "../board/board.component";

@Component({
  selector: 'wernerware-tiles-game',
  templateUrl: './tile-game.component.html',
  styleUrls: ['./tile-game.component.css']
})
export class TileGameComponent implements AfterViewInit {

  @ViewChild('display') displayBoard : BoardComponent;
  @ViewChild('control') controlBoard : BoardComponent;

  private palette : Array<string> = ["#396AB1", "#3E9651", "#94CA6B", "#DA7C30", "#F1A75C", "#922428"];

  private displayValues : Array<Array<string>>;

  constructor() {
  }

  handleDisplayBoardTileClick(event : TileClickEvent) : void {

  }

  handleControlBoardTileClick(event : TileClickEvent) : void {

  }

  ngAfterViewInit(): void {
    for(let i = 0; i < 8; i++ ){
      this.controlBoard.drawTile(0, i, this.palette[i]);
    }

    this.displayValues = new Array<Array<string>>();
    for(let i = 0; i < this.displayBoard.width; i++){
      this.displayValues.push(new Array<string>());
      for(let j = 0; j < this.displayBoard.height; j++){
        let index = Math.floor(Math.random()*this.palette.length);
        this.displayValues[i][j] = this.palette[index];
      }
    }
    this.drawDisplayBoard();
  }

  drawDisplayBoard() : void {
    for(let i = 0; i < this.displayBoard.width; i++){
      this.displayValues.push(new Array<string>());
      for(let j = 0; j < this.displayBoard.height; j++){
        this.displayBoard.drawTile(i,j,this.displayValues[i][j]);
      }
    }
  }

  getDisplayValues() : Array<Array<string>> {
    return this.displayValues;
  }



}
