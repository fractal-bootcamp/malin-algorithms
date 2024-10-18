import { useState, useEffect } from "react";

import type {
  SelectionSortAnimationProps,
  SelectionSortState,
  Swaps,
  ArrayHistory,
  ArraySize
} from "@/types/typesSort"


type ArraySize = 'small' | 'medium' | 'large';

// visualise initial state
const SelectionSortAnimation: React.FC<SelectionSortAnimationProps> = ({
  stateHistory,
  swapIndexes,
  smallestIndexHistory,
  setArraySize
}) => {
  const [animationIndex, setAnimationIndex] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const sortedArray = stateHistory[animationIndex][0]
  console.log('state history', stateHistory)
  console.log('sorted array', sortedArray)

  const isFinished = animationIndex >= stateHistory.length - 1 // if it is, then we're finished

  console.log(animationIndex)
  useEffect(() => {
    if (!isRunning || isFinished) return;
    console.log(animationIndex, stateHistory, stateHistory[animationIndex])

    const timeoutId = setTimeout(() => {
      if (animationIndex < stateHistory.length - 1) {
        const nextIndex = animationIndex + 1;
        setAnimationIndex(nextIndex);
      } else {
        setIsRunning(false)
      }
    }, 50);

    return () => clearTimeout(timeoutId)
  }, [animationIndex, isFinished, isRunning])

  const handleBubbleSort = () => {
    // ideally this will call the bubbleSort function, which will pass state for every position change
    // every position change will update the state of sortedArray, which should get reflected in a change in the divs
    // you can add a slight time delay to ensure the visualisation flows
    setIsRunning(true)
    setAnimationIndex(1);
  }

  const handleReset = () => {
    setAnimationIndex(0)
    setIsRunning(false)
  }

  // lets say each number represents the height of a div
  return (
    <div className="bg-sky-50 flex flex-col items-center justify-center bg-gradient-to-b from-sky-100 to-rose-100 w-full h-screen p-4 text-black">
      <h1 className="text-2xl font-bold mb-4">Selection Sort Visualization</h1>
      <div>{isFinished ? 'DONE!' : ''}</div>
      <div>test {JSON.stringify(sortedArray)}</div>
      <div className="flex flex-row w-full h-5/6 border-2 border-gray-300 rounded-lg overflow-hidden">
        <div className="flex-grow h-full flex items-end justify-start p-2 overflow-x-auto">
          {sortedArray.map((magnitude, index) => (
            <div
              key={index}
              className={`w-16 bg-blue-300 rounded-t-sm transition-all flex items-end justify-center mx-px`}
              style={{ height: `${magnitude}%` }}
            >{ }
              <span className="text-white font-bold pb-1"></span>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between ml-8 p-2 border-2">
          <div>
            <h2 className="text-center">Set Size of Array</h2>
            <div className="flex flex-col my-2">
              <button
                className="border-2 border-neutral-950 p-2 rounded hover:bg-gray-200 transition-colors m-2"
                onClick={() => setArraySize("small")}
              >small</button>
              <button
                className="border-2 border-neutral-950 p-2 rounded hover:bg-gray-200 transition-colors m-2"
                onClick={() => setArraySize("medium")}
              >medium</button>
              <button
                className="border-2 border-neutral-950 p-2 rounded hover:bg-gray-200 transition-colors m-2"
                onClick={() => setArraySize("large")}
              >large</button>
            </div>
          </div>
          <div className="border-2 flex">
            <button
              className="border-2 border-neutral-950 p-2 rounded hover:bg-gray-200 transition-colors m-2"
              onClick={handleBubbleSort}
            >
              {'Sort'}
            </button>
            <button
              className="border-2 border-neutral-950 p-2 rounded hover:bg-gray-200 transition-colors m-2"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectionSortAnimation
