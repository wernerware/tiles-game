import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TileGameComponent} from "./tile-game/tile-game.component";
import {BoardComponent} from "./board/board.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TileGameComponent,
        BoardComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should create a game configuration with all values assigned truthy values', async( () => {
    let app = new AppComponent();
    expect(app.gameConfig).toBeTruthy();
    expect(app.gameConfig.controlsCols).toBeTruthy();
    expect(app.gameConfig.controlsRows).toBeTruthy();
    expect(app.gameConfig.controlsWidth).toBeTruthy();
    expect(app.gameConfig.controlsHeight).toBeTruthy();
    expect(app.gameConfig.numCols).toBeTruthy();
    expect(app.gameConfig.numRows).toBeTruthy();
    expect(app.gameConfig.gameWidth).toBeTruthy();
    expect(app.gameConfig.gameHeight).toBeTruthy();
  }));
});
