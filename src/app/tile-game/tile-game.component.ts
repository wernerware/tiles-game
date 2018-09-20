import {Component, ViewChild} from '@angular/core';
import {TileClickEvent} from "../board/tileClickEvent";
import {BoardComponent} from "../board/board.component";

@Component({
  selector: 'wernerware-tiles-game',
  templateUrl: './tile-game.component.html',
  styleUrls: ['./tile-game.component.css']
})
export class TileGameComponent {

  @ViewChild('display') displayBoard : BoardComponent;
  @ViewChild('control') controlBoard : BoardComponent;

  private palette : Array<string> = ["396AB1", "82A3DB", "3E9651", "94CA6B", "948B3D", "DCD280", "DA7C30", "F1A75C", "922428", "B68570", "CC2529", "E36E90", "6B4C9A", "B087C7", "535154", "909595"];

  constructor() { }

  handleDisplayBoardTileClick(event : TileClickEvent) : void {
    console.log(`row: ${event.tileRow}, col ${event.tileCol}`);

    this.displayBoard.drawTile(event.tileRow, event.tileCol,'black');
  }

  handleControlBoardTileClick(event : TileClickEvent) : void {
    this.controlBoard.drawTile(event.tileRow, event.tileCol, 'black');
  }

}
