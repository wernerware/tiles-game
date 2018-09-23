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
    this.gameConfig = WernerwareTileGameConfigBuilder.default().build();
  }


}
