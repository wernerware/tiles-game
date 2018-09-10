import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, AfterViewInit {

  canvas : ElementRef;
  private cx: CanvasRenderingContext2D;

  @Input() width : number;
  @Input() height : number;
  @Input() numCols : number;
  @Input() numRows : number;

  private tileWidth;
  private tileHeight;

  constructor() { }

  ngOnInit() {
    this.tileWidth = this.width / this.numCols;
    this.tileHeight = this.height / this.numRows;
  }

  @ViewChild('myCanvas')
  set myCanvas(el: ElementRef){
    this.canvas = el;
  }

  set myCx(cxIn: CanvasRenderingContext2D){
    this.cx = cxIn;
  }

  ngAfterViewInit(): void {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.myCx = canvasEl.getContext('2d');

    this.drawCheckerboard();
  }

  drawCheckerboard() : void {
    for(let i = 0; i < this.numCols; i++){
      for(let j = 0; j < this.numRows; j++){
        if( i % 2 - j % 2 == 0 ){
          this.drawTile(i, j);
        }
      }
    }
  }

  drawTile(row : number, col : number) : void {
    this.cx.fillRect(this.width * col / this.numCols, this.height * row / this.numRows, this.tileWidth, this.tileHeight);
  }

}
