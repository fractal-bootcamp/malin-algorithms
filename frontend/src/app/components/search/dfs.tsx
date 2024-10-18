import React, { useState, useEffect } from 'react';
import type { Graph, DFSAnimationProps } from '@/types/typesSearch';

export default function DFSAnimation({
  graph,
  currentVertex,
  target,
  searchPath
}: DFSAnimationProps) {
  // const [currentVertex, setCurrentVertex] = useState<string>(currentVertex)
  // const [target, setTarget] = useState<string>(target);
  const [result, setResult] = useState<Set<string> | null>(null);
  const [visitedOrder, setVisitedOrder] = useState<string[]>([]);
  const [animationStep, setAnimationStep] = useState<number>(0);

  // useEffect(() => {
  //   if (searchPath) {
  //     const path = Array.from(searchPath);
  //     const animationInterval = setInterval(() => {
  //       setAnimationStep((prevStep) => )
  //     })
  //   }


  // }, [])

  function getNodePosition(node: string): string {
    const positions: { [key: string]: string } = {
      A: 'top-0 left-1/2 -translate-x-1/2',
      B: 'top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2',
      C: 'top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2',
      D: 'bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2',
      E: 'bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2',
      F: 'bottom-0 left-1/2 -translate-x-1/2',
    };
    return positions[node] || '';
  }

  function getCoordinates(node: string): { x: number, y: number } {
    const coordinates: { [key: string]: { x: number, y: number } } = {
      A: { x: 150, y: 0 },
      B: { x: 75, y: 75 },
      C: { x: 225, y: 75 },
      D: { x: 75, y: 225 },
      E: { x: 225, y: 225 },
      F: { x: 150, y: 300 },
    };
    return coordinates[node] || { x: 0, y: 0 };
  }

  return (
    <div>
      <div className="relative w-[300px] h-[300px]">
        {Object.keys(graph).map((node) => (
          <div
            key={node}
            className={`absolute w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold
              ${getNodePosition(node)}`}
          >
            {node}
          </div>
        ))}
        {Object.entries(graph).map(([node, neighbors]) =>
          neighbors.map((neighbor) => (
            <svg
              key={`${node}-${neighbor}`}
              className="absolute top-0 left-0 w-full h-full"
              style={{ zIndex: -1 }}
            >
              <line
                x1={getCoordinates(node).x}
                y1={getCoordinates(node).y}
                x2={getCoordinates(neighbor).x}
                y2={getCoordinates(neighbor).y}
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          ))
        )}
      </div>
    </div>
  );


}