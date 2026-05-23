/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let arr = s.split("");
  const romanArray = [
    { roman: "I", value: 1 },
    { roman: "V", value: 5 },
    { roman: "X", value: 10 },
    { roman: "L", value: 50 },
    { roman: "C", value: 100 },
    { roman: "D", value: 500 },
    { roman: "M", value: 1000 },
  ];

  let newArray = [];
  for (char of arr) {
    const find = romanArray.find((item) => item.roman === char);
    newArray.push(find.value);
  }

  let angkaArray = [newArray[0]];
  let j = 1;
  for (let i = 0; i < newArray.length - 1; i++) {
    if (newArray[j] === 5 && newArray[i] === 1) {
      angkaArray.pop();
      angkaArray.push(4);
    } else if (newArray[j] === 50 && newArray[i] === 10) {
      angkaArray.pop();
      angkaArray.push(40);
    } else if (newArray[j] === 500 && newArray[i] === 100) {
      angkaArray.pop();
      angkaArray.push(400);
    } else if (newArray[j] === 10 && newArray[i] === 1) {
      angkaArray.pop();
      angkaArray.push(9);
    }else if (newArray[j] === 100 && newArray[i] === 10) {
      angkaArray.pop();
      angkaArray.push(90);
    }else if (newArray[j] === 1000 && newArray[i] === 100) {
      angkaArray.pop();
      angkaArray.push(900);
    } else {
      angkaArray.push(newArray[j]);
    }
    j++;
  }

  const result = angkaArray.reduce((acc, curr) => acc + curr, 0);
  return result;
};