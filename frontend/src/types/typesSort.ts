// bubble sort
export type Swaps = [number, number] | [null, null]

export type ArrayHistory = number[][]

export interface BubbleSortState {
  sorted: number[]
  stateHistory: ArrayHistory,
  swaps: Swaps[],
  swapIndexes: Swaps[]
}

// selection sort

// insertion sort

// merge sort

// quick sort