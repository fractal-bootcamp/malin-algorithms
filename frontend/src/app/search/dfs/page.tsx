"use client";

import React, { useEffect, useState } from "react";

// Types
import {
  Graph,
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
  const [target, setTarget] = useState<string>("A")
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const fetchSortData = async () => {
      try {
        console.log('attempting to get data')
        const result = await getDFS(graph, currentVertex, target);
        console.log('data', result)
        setTraversalHistory(result)
        // Only set triggered to true after data is fetched
        //setTriggered(true);
      } catch (error) {
        console.error("Error fetching sort data:", error);
      }
    };

    fetchSortData()
  }, [target]);


  const handleReset = () => {
    window.location.reload();
  }

  const handleOnClick = (node: string) => {
    setTarget(node);
    setTriggered(true);
  }

  return (
    <div>
      <div className="flex flex-row justify-center items-center min-h-screen">
        <div className="flex flex-col border-2">
          <div className="border-b-2">
            <h2 className="text-4xl font-mono m-10 text-center">Depth First Search</h2>
          </div>
          <div className="flex flex-row">
            <div className="mx-12 p-20">
              <DFSAnimation graph={graph} traversalSteps={traversalHistory} target={target} triggered={triggered} />
            </div>
            <div className="p-8 border-l-2">
              <p className="text-center font-mono mb-4">Search Targets</p>
              <div className="flex flex-col items-center justify-center">
                {Object.keys(graph).map((node) => (
                  <button
                    key={node}
                    className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                    onClick={() => handleOnClick(node)}
                  >
                    {node}
                  </button>
                ))}
                <button
                  className="flex items-center justify-center bg-gray-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded m-2 mt-8"
                  onClick={() => handleReset()}>
                  reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};