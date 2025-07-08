class Solution {
  findGreater(arr) {
    const n = arr.length;
    if (n === 0) return [];

    const MAX_SIZE = 100001;
    let freqArr = new Array(MAX_SIZE).fill(0);

    for (let num of arr) {
      freqArr[num]++;
    }

    let res = new Array(n).fill(-1);
    let stack = [];

    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0) {
        let topIndex = stack[stack.length - 1];
        if (freqArr[arr[topIndex]] <= freqArr[arr[i]]) {
          stack.pop();
        } else {
          break;
        }
      }

      if (stack.length > 0) {
        res[i] = arr[stack[stack.length - 1]];
      }

      stack.push(i);
    }

    return res;
  }
}