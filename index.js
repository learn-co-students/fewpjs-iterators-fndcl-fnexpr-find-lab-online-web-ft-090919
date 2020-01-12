const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records){
  let record = records.find(function(record){
    return record['result'] === "W"
  })
  return record
}