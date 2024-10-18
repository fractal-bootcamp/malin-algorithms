"use client";

import React, { useEffect, useState } from "react";

// Types
import {
  Graph,
  Vertex,
  DFSAnimationProps
} from "@/types/typesSearch"

// Express utils stores the functions that will query the backend server with an unsortedArray and recieve a sortedArray
import {
  getDFS,
} from "@/utils/express";

// // Components
import DFSAnimation from "@/app/components/search/dfs";


export default function Page() {
  const [searchPath, setsearchPath] = useState<Set<string> | null>(null)
  const graph: Graph<string> = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
  };

  const currentVertex: string = "A"
  const target: string = "D"

  useEffect(() => {
    const fetchSortData = async () => {
      try {
        const result = await getDFS(graph, currentVertex, target);
        setsearchPath(result)
      } catch (error) {
        console.error("Error fetching sort data:", error);
      }
    };

    fetchSortData();
  }, []);


  return (
    <div>
      <DFSAnimation graph={graph} currentVertex={currentVertex} target={target} searchPath={searchPath} />
    </div>
  )

};