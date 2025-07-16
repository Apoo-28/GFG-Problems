/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
  countNumbers(n) {
    if (n < 36) {
      return 0;
    }
    const limit_int = Math.floor(Math.sqrt(n));
    const primes = this.getPrimes(limit_int);
    let count = 0;

    for (const p of primes) {
      const eighth = Math.pow(p, 8);
      if (eighth <= n) {
        count++;
      } else {
        break;
      }
    }

    let j = primes.length - 1;
    for (let i = 0; i < primes.length; i++) {
      const p = primes[i];
      if (p > limit_int) {
        break;
      }
      const max_q = Math.floor(limit_int / p);
      while (j > i && primes[j] > max_q) {
        j--;
      }
      if (j <= i) {
        break;
      }
      count += j - i;
    }

    return count;
  }

  getPrimes(max_sieve) {
    if (max_sieve < 2) {
      return [];
    }
    const isPrime = new Array(max_sieve + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i * i <= max_sieve; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= max_sieve; j += i) {
          isPrime[j] = false;
        }
      }
    }
    const primes = [];
    for (let i = 2; i <= max_sieve; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }
    return primes;
  }
}