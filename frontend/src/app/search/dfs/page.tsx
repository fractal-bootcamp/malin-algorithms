"use client";

import React, { useEffect, useState } from "react";

// Types
import {
  Graph,
  Vertex,
  DFSAnimationProps,
  TraversalStep
} from "@/types/typesSearch"

// Express utils stores the functions that will query the backend server with an unsortedArray and recieve a sortedArray
import {
  getDFS,
} from "@/utils/express";

// // Components
import DFSAnimation from "@/app/components/search/dfs";


export default function Page() {
  const [traversalHistory, setTraversalHistory] = useState<TraversalStep[] | null>(null)
  const graph: Graph<string> = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
  };

  const currentVertex: string = "A"
  const [target, setTarget] = useState<string>("C")

  useEffect(() => {
    const fetchSortData = async () => {
      try {
        console.log('attempting to get data')
        const result = await getDFS(graph, currentVertex, target);
        console.log('data', result)
        setTraversalHistory(result)
      } catch (error) {
        console.error("Error fetching sort data:", error);
      }
    };

    fetchSortData();
  }, []);


  return (
    <div>
      <div className="flex flex-row justify-center items-center min-h-screen">
        <div className="flex flex-col border-2">
          <div>
            <h2 className="text-4xl font-bold mb-16 text-center">Depth First Search</h2>
          </div>
          <div className="flex flex-row">
            <div className="mx-12 border-2 p-20">
              <DFSAnimation graph={graph} traversalSteps={traversalHistory} />
            </div>
            <div className="border-2 p-8">
              <p className="text-center font-bold mb-4">Select Search Target</p>
              <div className="flex flex-col items-center justify-center">
                {Object.keys(graph).map((node) => (
                  <button
                    key={node}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                    onClick={() => setTarget(node)}
                  >
                    {node}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};