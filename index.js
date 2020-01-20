const winYear = {}

function testFunc() {
  return "hi"
}

superbowlWin = (array) => {
  // find element that has "W" for Object.result
  let result = array.find( e => e.result === "W")
  // return year of win if result if found, else return undefined
  return !!result? result.year : undefined
}