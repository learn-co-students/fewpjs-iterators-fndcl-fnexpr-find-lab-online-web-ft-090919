const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) { 
  let winGame = record.find(function (game) {return game.result === "W"})
  if(winGame !== undefined) { 
    return winGame.year
  } else { 
    return winGame 
  } 
} 

