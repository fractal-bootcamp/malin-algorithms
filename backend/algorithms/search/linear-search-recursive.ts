
/**
 * Performs a recursive linear search on an array and return the index of the target if it exists
 * @param {Array} array - The array to search.
 * @param {*} target - The value to search for.
 * @param {number} [index=0] - The current index in the search.
 * @returns {number} The index of the target if found, or -1 if not found.
 */

const array = ['a', 'b', 'c', 'd', 'e', 'f'];

const recursiveLinearSearch = (array:[], target:any, index=0):number => {
  if (index > array.length - 1) {
    return -1
  }
  console.log(array[index])
  if (array[index] === target) {
    return index
  }

  return recursiveLinearSearch(array, target, index+1)
}