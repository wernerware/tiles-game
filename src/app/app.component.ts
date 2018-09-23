import { Component } from '@angular/core';
import {WernerwareTileGameConfig, WernerwareTileGameConfigBuilder} from "./tile-game/tile-game.config";

@Component({
  selector: 'wernerware-tiles-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  gameConfig : WernerwareTileGameConfig;

  constructor() {
    this.gameConfig = new WernerwareTileGameConfigBuilder()
      .gameHeight(400)
      .gameWidth(400)
      .numCols(20)
      .numRows(20)
      .controlsWidth(400)
      .controlsHeight(67)
      .controlsCols(6)
      .controlsRows(1)
      .build();
  }


}
