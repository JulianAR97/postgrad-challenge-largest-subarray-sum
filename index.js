// Iterates across the array once. Must touch every element so O(n) should be best case

const largestSubarraySum = (array) => {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (sum > max) {
      max = sum
    }
    if (sum <= 0) {
      sum = 0
    } 
  }
  return max
}

