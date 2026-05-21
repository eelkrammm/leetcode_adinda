/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(1);
  }

  let coba = [];
  let newArr = [...array];
  let h = 0;
  let currentTotal = n;
  for (let index = 0; index < n; index++) {
    for (let i = 26; i > 0; i--) {
      let prediksi = currentTotal - 1 + i;
      if (prediksi <= k) {
        coba.push(i);
        currentTotal = prediksi;
        break;
      }
    }
  }

  const huruf = "abcdefghijklmnopqrstuvwxyz";
  coba = coba.reverse()
  let result = [];
  for (let char of coba) {
    result.push(huruf[char - 1]);
  }

  return result.join("");
};