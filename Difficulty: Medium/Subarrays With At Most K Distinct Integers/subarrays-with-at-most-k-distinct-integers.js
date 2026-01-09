class Solution {
  countAtMostK(arr, k) {
    let n = arr.length;
    let left = 0;
    let count = 0;
    let freq = new Map();

    for (let right = 0; right < n; right++) {
      // Add current element to frequency map

      freq.set(arr[right], (freq.get(arr[right]) || 0) + 1);

      // Shrink window if distinct elements exceed k

      while (freq.size > k) {
        let leftElement = arr[left];
        freq.set(leftElement, freq.get(leftElement) - 1);
        if (freq.get(leftElement) === 0) {
          freq.delete(leftElement);
        }
        left++;
      }

      // Count all subarrays ending at 'right'

      count += right - left + 1;
    }

    return count;
  }
}