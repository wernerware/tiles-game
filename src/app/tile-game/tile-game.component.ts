import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {TileClickEvent} from "../board/tileClickEvent";
import {BoardComponent} from "../board/board.component";
import {WernerwareTileGameConfig} from "./tile-game.config";
import {forEach} from "@angular/router/src/utils/collection";
import {BoardGenerator} from "./tile-game.board-generator.service";

@Component({
  selector: 'wernerware-tiles-game',
  templateUrl: './tile-game.component.html',
  styleUrls: ['./tile-game.component.css']
})
export class TileGameComponent implements AfterViewInit {

  @ViewChild('display') displayBoard : BoardComponent;
  @ViewChild('control') controlBoard : BoardComponent;

  @Input() config : WernerwareTileGameConfig;

  private displayValues : Array<Array<string>>;
  private boardGenerator : BoardGenerator;

  constructor(private bg : BoardGenerator ) {
    this.boardGenerator = bg;
  }

  handleDisplayBoardTileClick(event : TileClickEvent) : void {

  }

  handleControlBoardTileClick(event : TileClickEvent) : void {
    let color : string = this.boardGenerator.getPalette()[event.tileCol];
    while( true ) {
      let newValues;
      if( newValues = this.evaluateMove(color) ){
        this.displayValues = newValues;
      } else {
        break;
      }
    }
    this.drawDisplayBoard();
  }

  ngAfterViewInit(): void {
    for(let i = 0; i < 8; i++ ){
      this.controlBoard.drawTile(0, i, this.boardGenerator.getPalette()[i]);
    }

    this.displayValues = this.boardGenerator.generate(this.displayBoard);

    this.drawDisplayBoard();
  }

  drawDisplayBoard() : void {
    for(let j = 0; j < this.displayBoard.height; j++){
      for(let i = 0; i < this.displayBoard.width; i++){
        this.displayBoard.drawTile(i,j,this.displayValues[j][i]);
      }
    }
  }

  getDisplayValues() : Array<Array<string>> {
    return this.displayValues;
  }

  evaluateMove(color : string) : Array<Array<string>> {
    let newBoardValues = new Array<Array<string>>();
    let changed = false;
    for(let j = 0; j < this.displayValues.length; j++){
      newBoardValues.push(new Array<string>());
      for(let i = 0; i < this.displayValues[j].length; i++){
        if( this.displayValues[j][i] === color && this.hasFinishedNeighbor(i,j)){
          newBoardValues[j].push('black');
          changed = true;
        } else {
          newBoardValues[j].push(this.displayValues[j][i]);
        }
      }
    }

    if( changed ){
      return newBoardValues;
    } else {
      return null;
    }
  }

  hasFinishedNeighbor(col : number, row : number) : boolean {
    let retval = false;

    let relativeTestPositions = [[0,1],[1,0],[0,-1],[-1,0]];
    relativeTestPositions.every(function(relativePosition){
      let testCol = relativePosition[0] + col;
      let testRow = relativePosition[1] + row;
      if( this.tolerantPositionQuery(testCol, testRow) === 'black' ){
        retval = true;
        return false;
      } else {
        return true;
      }
    }.bind(this));

    return retval;
  }

  tolerantPositionQuery(col : number, row : number) : string {
    if( col >= 0 && col < this.displayValues[0].length && row >= 0 && row < this.displayValues.length ){
      return this.displayValues[row][col];
    } else {
      return null;
    }
  }

}
