const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (array) => {
  let value = array.find( win => win.result === "W" )
  if (value){return value.year}
}



