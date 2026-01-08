/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
  countSubarrays(arr, k) {
    // Helper function to count subarrays with at most k odd numbers

    const countAtMostKOdds = (arr, k) => {
      if (k < 0) return 0;

      let count = 0;
      let left = 0;
      let oddCount = 0;

      for (let right = 0; right < arr.length; right++) {
        // If current element is odd, increment oddCount

        if (arr[right] % 2 === 1) {
          oddCount++;
        }

        // Shrink window if we have more than k odds

        while (oddCount > k) {
          if (arr[left] % 2 === 1) {
            oddCount--;
          }
          left++;
        }

        // All subarrays ending at right with start from left to right are valid

        count += right - left + 1;
      }

      return count;
    };

    // Count exactly k odds = (at most k odds) - (at most k-1 odds)

    return countAtMostKOdds(arr, k) - countAtMostKOdds(arr, k - 1);
  }
}
