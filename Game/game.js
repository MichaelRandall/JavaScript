'use strict';
var gameStates = ["not_started","paused","complete"];

function Game(){
  this.gameState = "not_started";
  this.currentScore = 0;
  this.numberOfObjects = 0;
  this.moveCount = 0;
}

Game.prototype = {
  constructor: Game,
  getGameState: function(){
    return this.gameState;
  },
  getScore: function(){
    return this.currentScore;
  },
  getNumberOfObjects: function(){
    return this.numberOfObjects;
  },
  setMoveCount: function(){
    this.moveCount++;
  },
  getMoveCount: function(){
    return this.moveCount;
  }
}
