class Solution {
  countSubstr(s, k) {
    // Helper function to count substrings with at most k distinct characters

    const countAtMostK = (k) => {
      if (k === 0) return 0;

      let count = 0;
      let left = 0;
      const freq = new Array(26).fill(0);
      let distinct = 0;

      for (let right = 0; right < s.length; right++) {
        const charIndex = s.charCodeAt(right) - 97; // 'a' is 97

        if (freq[charIndex] === 0) {
          distinct++;
        }
        freq[charIndex]++;

        // Shrink window if we have more than k distinct characters

        while (distinct > k) {
          const leftCharIndex = s.charCodeAt(left) - 97;
          freq[leftCharIndex]--;
          if (freq[leftCharIndex] === 0) {
            distinct--;
          }
          left++;
        }

        // All substrings ending at 'right' with left boundary from 'left' to 'right'

        // have at most k distinct characters

        count += right - left + 1;
      }

      return count;
    };

    // Number of substrings with exactly k distinct characters

    // = (substrings with at most k distinct) - (substrings with at most k-1 distinct)

    return countAtMostK(k) - countAtMostK(k - 1);
  }
}