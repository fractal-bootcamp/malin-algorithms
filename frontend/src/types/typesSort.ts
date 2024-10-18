// bubble sort
export type Swaps = [number, number] | [null, null]

export type ArrayHistory = number[][]

export type ArraySize = 'small' | 'medium' | 'large';

export interface BubbleSortState {
  sorted: number[]
  stateHistory: ArrayHistory,
  swaps: Swaps[],
  swapIndexes: Swaps[]
}

export interface BubbleSortAnimationProps {
  stateHistory: ArrayHistory;
  swapIndexes: Swaps[];
  setArraySize: React.Dispatch<React.SetStateAction<ArraySize>>
}

// selection sort

export interface SelectionSortState {
  sorted: number[]
  stateHistory: ArrayHistory[],
  swapIndexes: Swaps[],
  smallestIndexHistory: number[]
}

export interface SelectionSortAnimationProps {
  stateHistory: ArrayHistory[];
  swapIndexes: Swaps[];
  setArraySize: React.Dispatch<React.SetStateAction<ArraySize>>
}

// insertion sort

// merge sort

// quick sort