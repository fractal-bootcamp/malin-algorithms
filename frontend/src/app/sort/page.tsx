"use client";

import React, { useEffect, useState } from "react";

// Types
import {
  BubbleSortState,
  ArrayHistory,
  Swaps
} from "@/types/typesSort"

// Express utils
import {
  getBubbleSort,
  getSelectionSort,
  getInsertionSort,
  getMergeSort,
  getQuickSort,
} from "@/utils/express";

// // Components
// import AnimationHandler from "@/components/general/AnimationHandler";
// import Bubble from "@/components/sort/Bubble";
// import Selection from "@/components/sort/Selection";
// import Insertion from "@/components/sort/Insertion";
// import Merge from "@/components/sort/Merge";
// import Quick from "@/components/sort/Quick";

const page = () => {
  const list = [22, 13, 71, 49, 37, 27, 11, 7, 42, 67, 103];
  const [mode, setMode] = useState<string>("bubble");

  return (
    <div>
      Make Bubble Sort Happen!
    </div>
  )

};

export default page;