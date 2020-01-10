const testVar = {}

function testFunc() {
  return "hi"
}



function superbowlWin(record) {
  const winningRecord = record.find( function(record) { return record.result == "W" })
    if (!!winningRecord) {
      return winningRecord.year 
    }  else {
      return undefined 
    }
}