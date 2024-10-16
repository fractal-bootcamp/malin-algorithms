import { useState, useEffect, useCallback } from "react";
import { BubbleSort } from "./algorithms/bubbleSort";
import './index.css'


// visualise initial state
export const InitialUnorderedState = () => {
  const unsortedData = [
    89, 54, 23, 76, 12, 67, 45, 31, 23, 76, 12, 67, 45, 31
  ];

  const [sortedArray, setSortedArray] = useState(unsortedData);
  const [isSorting, setIsSorting] = useState(false);
  const maxValue = Math.max(...unsortedData);


  const handleBubbleSort = () => {
    // ideally this will call the bubbleSort function, which will pass state for every position change
    // every position change will update the state of sortedArray, which should get reflected in a change in the divs
    // you can add a slight time delay to ensure the visualisation flows


  }
  // lets say each number represents the height of a div
  return (
    <div className="bg-sky-50 flex flex-col items-center justify-center bg-gradient-to-b from-sky-100 to-rose-100 w-full h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Bubble Sort Visualization</h1>
      <div className="flex flex-row w-full h-5/6 border-2 border-gray-300 rounded-lg overflow-hidden">
        <div className="flex-grow h-full flex items-end justify-start p-2 overflow-x-auto">
          {sortedArray.map((magnitude, index) => (
            <div
              key={index}
              className="w-16 bg-blue-400 rounded-t-sm transition-all duration-500 ease-in-out flex items-end justify-center mx-px"
              style={{ height: `${(magnitude / maxValue) * 100}%` }}
            >
              <span className="text-white font-bold pb-1"></span>
            </div>
          ))}
        </div>
        <div className="flex items-center ml-8 p-2">
          <button
            className="border-2 border-neutral-950 p-2 rounded hover:bg-gray-200 transition-colors"
            onClick={handleBubbleSort}
          >
            {isSorting ? 'Sorting...' : 'Bubble Sort'}
          </button>
        </div>
      </div>
    </div>
  );
}

// get the state changes

// visualise each state change 

// reach sorted state