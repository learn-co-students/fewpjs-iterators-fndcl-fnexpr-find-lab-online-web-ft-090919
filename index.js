// const testVar = {}

// function testFunc() {
//   return "hi"
// }



const superbowlWin = (record) => {
  let win = record.find(r => r.result === "W")
  return typeof(win) !== "undefined" ? win.year : undefined
}



// const superbowlWin = (arr) => {
//   const result = arr.find(matchData => matchData.result === "W")
//   return typeof(result) !== "undefined" ? result["year"] : undefined;
// };



// record.find( function(r) { return r === "W"})


// let roommates = ["jess", "winston", "winston", "nick"];

// roommates.find( function(s) { return s === "winston" })
// //=> winston