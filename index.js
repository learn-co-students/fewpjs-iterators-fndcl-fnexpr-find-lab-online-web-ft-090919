const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let foundObject = array.find(object => {
    if (object.result === "W"){
      return object
    }
  })
  console.log(foundObject)
  return foundObject ? foundObject.year : undefined
} 