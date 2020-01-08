function superbowlWin(array){
  let query = array.find(item => item.result === "W");
  return !!query ? query.year : undefined; 
}