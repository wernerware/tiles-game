export class WernerwareTileGameConfig {
  numCols : number;
  numRows : number;
  gameWidth : number;
  gameHeight : number;
  controlsWidth : number;
  controlsHeight : number;
  controlsCols : number;
  controlsRows : number;
}

export class WernerwareTileGameConfigBuilder {
  private product : WernerwareTileGameConfig;

  constructor(){
    this.product = new WernerwareTileGameConfig();
  }

  numCols(numCols : number) : WernerwareTileGameConfigBuilder {
    this.product.numCols = numCols;
    return this;
  }

  numRows(numRows : number) : WernerwareTileGameConfigBuilder {
    this.product.numRows = numRows;
    return this;
  }

  gameWidth(gameWidth : number) : WernerwareTileGameConfigBuilder {
    this.product.gameWidth = gameWidth;
    return this;
  }

  gameHeight(gameHeight : number) : WernerwareTileGameConfigBuilder {
    this.product.gameHeight = gameHeight;
    return this;
  }

  controlsWidth(controlsWidth : number) : WernerwareTileGameConfigBuilder {
    this.product.controlsWidth = controlsWidth;
    return this;
  }

  controlsHeight(controlsHeight : number) : WernerwareTileGameConfigBuilder {
    this.product.controlsHeight = controlsHeight;
    return this;
  }

  controlsCols(controlsCols : number) : WernerwareTileGameConfigBuilder {
    this.product.controlsCols = controlsCols;
    return this;
  }

  controlsRows(controlsRows : number) : WernerwareTileGameConfigBuilder {
    this.product.controlsRows = controlsRows;
    return this;
  }

  build() : WernerwareTileGameConfig {
    return this.product;
  }

  static default() : WernerwareTileGameConfigBuilder {
    return new WernerwareTileGameConfigBuilder()
      .gameHeight(400)
      .gameWidth(400)
      .numCols(20)
      .numRows(20)
      .controlsWidth(400)
      .controlsHeight(67)
      .controlsCols(6)
      .controlsRows(1);
  }
}
