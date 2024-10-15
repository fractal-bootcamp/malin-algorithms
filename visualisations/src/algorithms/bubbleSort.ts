// Go through the array, one value at a time.
// For each value, compare the value with the next value.
// If the value is higher than the next one, swap the values so that the highest value comes last.
// Go through the array as many times as there are values in the array.
// An inner loop that goes through the array and swaps values if the first value is higher than the next value. This loop must loop through one less value each time it runs.
// An outer loop that controls how many times the inner loop must run. For an array with n values, this outer loop must run n-1 times.

export const BubbleSort = (unsortedArray) => {
  const arrayLength = unsortedArray.length
  for (let i=0; i < arrayLength - 1; i++) {
    let swapped = false;
    for (let j=0; j < arrayLength - i - 1; j++) {
      console.log(unsortedArray)
      if (unsortedArray[j] > unsortedArray[j+1]) {
        [unsortedArray[j], unsortedArray[j+1]] = [unsortedArray[j+1], unsortedArray[j]];
        console.log('swapped', unsortedArray[j], 'and', unsortedArray[j+1])
        swapped = true;
      }
    }
    console.log(`End of pass ${i+1}:`, unsortedArray)
    if (!swapped) {
      console.log(`\nArray is sorted after ${i+1} passes`)
      break // if no swapping occurs, the array is sorted
    }
  }

  console.log("Final sorted array:", unsortedArray)
  return unsortedArray
}