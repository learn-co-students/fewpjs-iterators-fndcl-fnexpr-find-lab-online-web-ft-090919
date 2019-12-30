const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = function(record){
  let win = record.find( entry => entry.result === "W")
  return !!win ? win.year : undefined
}
