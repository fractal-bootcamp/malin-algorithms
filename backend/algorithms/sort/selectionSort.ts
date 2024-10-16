// we need an unsorted array
// we need a sorted array to track what has already been done?
// on the first pass, we need to go through the array and find the lowest value
// move the first value to the begining of the array
// on the second pass, we need to go through the array and find the next lowest value
// move the second value to the second position of the array
// and repeat n number of times

const unsortedArray = [20,5,3,78,5,990,1,39,4,12,5,8]

export const selectionSort = (unsortedArray: number[]): number[] => {
  const moveArrayItem = (array: number[], fromIndex: number, toIndex: number) => {
    // remove the smallest element from the array and save it to a variable
    const [item] = array.splice(fromIndex, 1);
    array.splice(toIndex, 0, item);
    return array;
  }
  
  for (let i = 0; i < unsortedArray.length; i++) {
    let indexOfSmallest = i;
    // starting at the (i+1)th position so we don't include the first value in the array
    for (let j = i+1; j < unsortedArray.length; j++) {
      if (unsortedArray[j] < unsortedArray[indexOfSmallest]) {
        indexOfSmallest = j;
      }
    }
    // after each run of the inner loop we have the location of the next smallest value
    // we need to take this and add it to the beginning
    moveArrayItem(unsortedArray, indexOfSmallest, i)
  }
  const sortedArray = [...unsortedArray]
  return sortedArray
}
