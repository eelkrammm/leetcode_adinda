/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
   let scoreArray = [];
  for (let i = 0; i < operations.length; i++) {
    if (Number.isFinite(Number(operations[i]))) {
      scoreArray.push(Number(operations[i]));
    } else if (
      !Number.isFinite(Number(operations[i])) &&
      operations[i] === "C"
    ) {
      scoreArray.pop();
    } else if (
      !Number.isFinite(Number(operations[i])) &&
      operations[i] === "D"
    ) {
      const double = Number(scoreArray[scoreArray.length - 1] * 2);
      scoreArray.push(double);
    } else if (
      !Number.isFinite(Number(operations[i])) &&
      operations[i] === "+"
    ) {
      const sum =
        Number(scoreArray[scoreArray.length - 1]) +
        Number(scoreArray[scoreArray.length - 2]);
      scoreArray.push(sum);
    }
  }
  return scoreArray.reduce((acc, current) => acc + current, 0);
};