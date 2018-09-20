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
});
