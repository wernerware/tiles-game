import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, AfterViewInit {

  @ViewChild('myCanvas') canvas : ElementRef;
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

  ngAfterViewInit(): void {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');

    this.drawCheckerboard();
  }

  drawCheckerboard() : void {
    for(let i = 0; i < this.numCols; i++){
      for(let j = 0; j < this.numRows; j++){
        let xCoord = this.width * i / this.numCols;
        let yCoord = this.height * j / this.numRows;
        if( i % 2 - j % 2 == 0 ){
          this.drawTile(xCoord, yCoord);
        }
      }
    }
  }

  drawTile(xCoord : number, yCoord : number) : void {
    this.cx.fillRect(xCoord, yCoord, this.tileWidth, this.tileHeight);
  }

}
