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
});
