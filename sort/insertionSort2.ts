// using recursion

const unsortedArray: number[] = [94,3,5,7,2,11,93,4,1]
const sortedArray: number[] = []

const insertionSort = (inputArray, start=0) => {
  // if the sorted array is empty, put the first element into the array
  if (sortedArray.length === 0) {
    sortedArray.push(inputArray[start]);
    inputArray
  }
  
  // insert the first element of the unsorted array into the sorted array
  console.log(sortedArray.length)
  for (let i=0; i < sortedArray.length; i++){
    if (inputArray[start] < sortedArray[i]) {
      sortedArray.splice(i, 0, inputArray[start]);
      console.log('added to sorted array',inputArray[start])
      inputArray.shift();
    }
  }
}

insertionSort(unsortedArray)

