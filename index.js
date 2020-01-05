function superBowlWin(array) {
  array.find(function(bowl) {
    debugger;
    return bowl.result === "W";
  });
}
superBowlWin([
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" }
]);
