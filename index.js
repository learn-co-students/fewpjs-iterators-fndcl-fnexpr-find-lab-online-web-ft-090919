const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin (array) {
  const win = array.find(record => record.result === 'W')
  return !!win ? win.year : undefined
}


  // { year: "2015", result: "N/A"},
