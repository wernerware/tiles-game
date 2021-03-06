import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TileClickEvent} from "./tileClickEvent";

@Component({
  selector: 'wernerware-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, AfterViewInit {

  private canvas: ElementRef;
  private cx: CanvasRenderingContext2D;

  @Input() width: number;
  @Input() height: number;
  @Input() numCols: number;
  @Input() numRows: number;

  private tileWidth;
  private tileHeight;

  constructor() {
  }

  @Output() tileClicks: EventEmitter<TileClickEvent> = new EventEmitter();

  ngOnInit() {
    this.tileWidth = this.width / this.numCols;
    this.tileHeight = this.height / this.numRows;
  }

  @ViewChild('myCanvas')
  set myCanvas(el: ElementRef) {
    this.canvas = el;
  }

  set myCx(cxIn: CanvasRenderingContext2D) {
    this.cx = cxIn;
  }

  ngAfterViewInit(): void {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.myCx = canvasEl.getContext('2d');
  }

  drawTile(row: number, col: number, fillStyle: string): void {
    this.cx.fillStyle = fillStyle;
    let xCoord: number = this.width * col / this.numCols;
    let yCoord: number = this.height * row / this.numRows;
    this.cx.fillRect(xCoord, yCoord, this.tileWidth, this.tileHeight);
  }

  handleClick(event: MouseEvent): void {

    let col = Math.floor(event.layerX * this.numCols / this.width);
    let row = Math.floor(event.layerY * this.numRows / this.height);

    let clickEvent = new TileClickEvent();
    clickEvent.tileCol = col;
    clickEvent.tileRow = row;
    clickEvent.clickEvent = event;

    this.tileClicks.emit(clickEvent);

  }
}
