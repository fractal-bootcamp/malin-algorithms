"use client";

import React, { useEffect, useState } from "react";

// Types
import {
  SelectionSortState,
  ArrayHistory,
  Swaps,
  ArraySize
} from "@/types/typesSort"

// Express utils stores the functions that will query the backend server with an unsortedArray and recieve a sortedArray
import {
  getSelectionSort,
} from "@/utils/express";

// // Components
import SelectionSortAnimation from "@/app/components/sort/SelectionSort";

export default function Page() {
  const [sortState, setSortState] = useState<SelectionSortState | null>(null);
  const [arraySize, setArraySize] = useState<ArraySize>("small")
  // const [sorted, setSorted] = useState<number[]>([])

  const generateRandomArrays = (size: ArraySize) => {
    const sizes = {
      small: 10,
      medium: 20,
      large: 40
    };

    const length = sizes[size] || 10; // Default to 10 if size is not recognized

    return Array.from({ length }, () => Math.floor(Math.random() * 100) + 1);
  };

  useEffect(() => {
    const fetchSortData = async () => {
      try {
        const result = await getSelectionSort(generateRandomArrays(arraySize));
        console.log('recieved the following:', result)
        setSortState(result);
        // setSorted(result.sorted)
      } catch (error) {
        console.error("Error fetching sort data:", error);
      }
    };

    fetchSortData();
  }, [arraySize]);

  if (!sortState) {
    return <div>Loading...</div>;
  }

  const { sorted, stateHistory, swapIndexes } = sortState;

  return (
    <div>
      <SelectionSortAnimation stateHistory={stateHistory} swapIndexes={swapIndexes} setArraySize={setArraySize} />
    </div>
  )

};