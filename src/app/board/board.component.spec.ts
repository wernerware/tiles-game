import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import {ElementRef} from "@angular/core";

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let fillRectSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fillRectSpy = jasmine.createSpyObj('CanvasRenderingContext2D',['fillRect']);
    component.myCx = fillRectSpy;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call fillRect on the 2d object when drawTile is called', () => {
    component.width = 100;
    component.height = 100;
    component.numRows = 10;
    component.numCols = 10;
    component.ngOnInit();
    component.drawTile(1,1);
    expect(fillRectSpy.fillRect).toHaveBeenCalledWith(10, 10, 10, 10);
  });

  it('should call fillRect based on the dimensions of the board and number of rows and cols', () => {
    component.width = 100;
    component.height = 49;
    component.numRows = 7;
    component.numCols = 10;
    component.ngOnInit();
    component.drawTile(3,2);
    expect(fillRectSpy.fillRect).toHaveBeenCalledWith(20, 21, 10, 7);
  });

  it('should emit a tile click event when the user clicks inside the canvas', () => {
    component.tileClicks.subscribe(event => {
      expect(event).toBeTruthy();
    });
    component.handleClick({});
  });

  it('should emit a tile click event for 3, 5 when 32, 57 is clicked on a board with 10x10 tiles', () => {
    component.width = 100;
    component.height = 100;
    component.numRows = 10;
    component.numCols = 10;
    component.ngOnInit();
    let event = {
      layerX : 32,
      layerY : 57
    };

    component.tileClicks.subscribe(event => {
      expect(event.tileCol).toEqual(3);
      expect(event.tileRow).toEqual(5);
    });
    component.handleClick(<MouseEvent>event);
  });

  it('should emit a tile click event for 9, 8 when 826, 733 is clicked on a board with 11x11 tiles', () => {
    component.width = 1000;
    component.height = 1000;
    component.numRows = 11;
    component.numCols = 11;
    component.ngOnInit();
    let event = {
      layerX : 826,
      layerY : 733
    };

    component.tileClicks.subscribe(event => {
      expect(event.tileCol).toEqual(9);
      expect(event.tileRow).toEqual(8);
    });
    component.handleClick(<MouseEvent>event);
  });
});
