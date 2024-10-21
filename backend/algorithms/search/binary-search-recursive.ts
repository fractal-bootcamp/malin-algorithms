const sArray = [1, 3, 5, 7, 8, 9, 10, 11, 12, 14, 16, 17, 18, 20, 21, 24, 25, 26, 28, 30, 32, 33, 35, 38, 41, 45, 46, 
  50, 52, 54, 55, 59, 60, 62, 65, 67, 69, 71, 73, 75, 77, 80, 82, 85, 87, 89, 91, 94, 97, 99]
// what if we didn't pass a modified array into each recursive function
// but instead we passed the start and end values so that we preserve the array values
const binarySearch = (sortedArray: number[], target: number, startIndex=0, endIndex?: number): number => {
    // check for target out of bounds conditions
    if (target < sortedArray[0] || target > sortedArray[sortedArray.length - 1]) {
      return -2
    }

  // set the endIndex explictly on the first iteration
  if (endIndex === undefined) {
    endIndex = sortedArray.length - 1;
  }

  // define the middle index
  let middleIndex = Math.floor((startIndex + endIndex)/2)

  // checks all cases where the target is not in the array including when the search space is empty
  if (startIndex > endIndex) {
    return -1
  }

  // set the base case -> return the middleIndex
  if (sortedArray[middleIndex] === target) {
    return middleIndex // we're always working with the index of the original array so we can simply return middleIndex
  } 
  
  // if target is greater than the middleIndex, change the startIndex one to the right of the middleIndex
  // if target is less than the middleIndex, change the endIndex one to the left of the middleIndex
  // and then run the function recursively
  if (target > sortedArray[middleIndex]) {
    startIndex = middleIndex + 1;
    return binarySearch(sortedArray, target, startIndex, endIndex)
  } 
  else {
    endIndex = middleIndex - 1;
    return binarySearch(sortedArray, target, startIndex, endIndex)
  }
}