const array = ['a', 'b', 'c', 'd', 'e', 'f'];

// find the letter e in an array of letters
export const linearSearch = (array, target) => array.find(element => element === target);

const result = linearSearch(array, 'e')
console.log(result)
