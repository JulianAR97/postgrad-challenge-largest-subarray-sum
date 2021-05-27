// Iterates across the array once. Must touch every element so O(n) should be best case

const largestSubarraySum = (array) => {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let temp = array[i] + sum;
    if (temp > max) {
      max = temp
      sum = temp
    } else if (temp <= 0) {
      sum = 0
    } else {
      sum = temp
    }
  }
  return max
}

