import { async, TestBed } from '@angular/core/testing';
import { TileGameComponent } from './tile-game.component';
import {Component, Input} from "@angular/core";
import {BoardComponent} from "../board/board.component";

describe('TileGameComponent', () => {

  @Component({
    selector: 'wernerware-board',
    template: '<div>SPiderMAn</div>'
  })
  class BoardComponentMock {
    @Input() width: number;
    @Input() height: number;
    @Input() numCols: number;
    @Input() numRows: number;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TileGameComponent, BoardComponentMock
      ]
    }).compileComponents();
  }));

  it('should create', async(() => {
    const fixture = TestBed.createComponent(TileGameComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
