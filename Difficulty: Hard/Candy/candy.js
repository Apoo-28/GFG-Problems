class Solution {
  minCandy(arr) {
    const n = arr.length;
    if (n === 0) return 0;

    let total = n;
    let i = 1;

    while (i < n) {
      if (arr[i] === arr[i - 1]) {
        i++;
        continue;
      }

      let peak = 0;
      while (i < n && arr[i] > arr[i - 1]) {
        peak++;
        total += peak;
        i++;
      }

      if (i === n) {
        return total;
      }

      let valley = 0;
      while (i < n && arr[i] < arr[i - 1]) {
        valley++;
        total += valley;
        i++;
      }

      total -= Math.min(peak, valley);
    }

    return total;
  }
}