import { async, TestBed } from '@angular/core/testing';
import { TileGameComponent } from './tile-game.component';
import {Component, Input} from "@angular/core";
import {BoardComponent} from "../board/board.component";
import {WernerwareTileGameConfigBuilder} from "./tile-game.config";

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

  let fixture, component : TileGameComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TileGameComponent, BoardComponentMock
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TileGameComponent);
    component = fixture.debugElement.componentInstance;
    component.config = WernerwareTileGameConfigBuilder.default().build();
  }));

  describe('basic setup', () => {
    beforeEach(async( () => {
      fixture.detectChanges();
    }));

    it('should create', async(() => {
      expect(component).toBeTruthy();
    }));

    it('should call drawDisplayBoard() when the view is done being initialized', async( () => {
      let drawDisplayBoardSpy : jasmine.Spy = spyOn(component,'drawDisplayBoard');

      component.ngAfterViewInit();
      expect(drawDisplayBoardSpy).toHaveBeenCalled();
    }));

    it('should create a non-empty set of display values by the time the view is done being initialized', async(() =>{
      component.ngAfterViewInit();
      expect(component.getDisplayValues()).toBeTruthy();
    }));

    it('should create a display board whose dimensions have been set', async( () => {
      expect(component.displayBoard.width).toBeTruthy();
      expect(component.displayBoard.height).toBeTruthy();
      expect(component.displayBoard.numCols).toBeTruthy();
      expect(component.displayBoard.numRows).toBeTruthy();
    }));

    it('should create a control board whose dimensions have been set', async( () => {
      expect(component.controlBoard.width).toBeTruthy();
      expect(component.controlBoard.height).toBeTruthy();
      expect(component.controlBoard.numCols).toBeTruthy();
      expect(component.controlBoard.numRows).toBeTruthy();
    }));
  });

  it('should call draw on the display board with a black tile at least once', async( () => {
    let displayDrawSpy : jasmine.Spy = spyOn(component.displayBoard,'drawTile');
    fixture.detectChanges();

    expect(displayDrawSpy).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Number),'black');
  }));
});
