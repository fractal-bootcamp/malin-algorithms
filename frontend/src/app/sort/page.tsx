"use client";

import React, { useEffect, useState } from "react";

// Types
import {
  BubbleSortState,
  ArrayHistory,
  Swaps
} from "@/types/typesSort"

// Express utils stores the functions that will query the backend server with an unsortedArray and recieve a sortedArray
import {
  getBubbleSort,
} from "@/utils/express";

// // Components
// import AnimationHandler from "@/components/general/AnimationHandler";
import BubbleSortAnimation from "@/app/components/sort/BubbleSort";
// import Selection from "@/components/sort/Selection";
// import Insertion from "@/components/sort/Insertion";
// import Merge from "@/components/sort/Merge";
// import Quick from "@/components/sort/Quick";

export default function Page() {
  const unsortedArray = [22, 13, 71, 49, 37, 27, 11, 7, 42, 67, 103];
  const [sortState, setSortState] = useState<BubbleSortState | null>(null);
  // const [sorted, setSorted] = useState<number[]>([])

  useEffect(() => {
    const fetchSortData = async () => {
      try {
        const result = await getBubbleSort(unsortedArray);
        console.log('recieved the following:', result)
        setSortState(result);
        // setSorted(result.sorted)
      } catch (error) {
        console.error("Error fetching sort data:", error);
      }
    };

    fetchSortData();
  }, []);

  if (!sortState) {
    return <div>Loading...</div>;
  }

  const { sorted, stateHistory, swapIndexes } = sortState;

  return (
    <div>
      <BubbleSortAnimation stateHistory={stateHistory} swapIndexes={swapIndexes} />
    </div>
  )

};