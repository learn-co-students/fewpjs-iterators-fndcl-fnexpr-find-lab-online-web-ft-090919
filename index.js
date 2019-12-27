const superbowlWin = (arr) => {
  const result = arr.find(matchData => matchData.result === "W")
  return typeof(result) !== "undefined" ? result["year"] : undefined;
};
