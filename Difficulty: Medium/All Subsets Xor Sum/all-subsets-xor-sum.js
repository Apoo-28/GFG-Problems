/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
  subsetXORSum(arr) {
    let n = arr.length;
    let bits = 0;

    for (let i = 0; i < n; ++i) bits |= arr[i];

    let ans = bits * Math.pow(2, n - 1);

    return ans;
  }
}