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
} from "@/utils/express";

// // Components
// import AnimationHandler from "@/components/general/AnimationHandler";
import BubbleSortAnimation from "@/app/components/sort/BubbleSort";
// import Selection from "@/components/sort/Selection";
// import Insertion from "@/components/sort/Insertion";
// import Merge from "@/components/sort/Merge";
// import Quick from "@/components/sort/Quick";

const page = () => {
  const unsortedArray = [22, 13, 71, 49, 37, 27, 11, 7, 42, 67, 103];

  return (
    <div>
      Make Bubble Sort Happen!
    </div>
  )

};

export default page;