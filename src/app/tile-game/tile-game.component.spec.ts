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
    drawTile() : void {}
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

  it('should call drawDisplayBoard() when the view is done being initialized', async( () => {
    const fixture = TestBed.createComponent(TileGameComponent);
    const component : TileGameComponent = fixture.debugElement.componentInstance;
    let drawDisplayBoardSpy : jasmine.Spy = spyOn(component,'drawDisplayBoard');
    component.ngAfterViewInit();
    expect(drawDisplayBoardSpy).toHaveBeenCalled();
  }));

  it('should create a non-empty set of display values by the time the view is done being initialized', async(() =>{
    const fixture = TestBed.createComponent(TileGameComponent);
    const component : TileGameComponent = fixture.debugElement.componentInstance;
    component.ngAfterViewInit();
    expect(component.getDisplayValues()).toBeTruthy();
  }));
});
