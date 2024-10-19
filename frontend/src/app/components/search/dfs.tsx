import React, { useState, useEffect } from 'react';
import type { Graph, DFSAnimationProps, TraversalStep } from '@/types/typesSearch';

// Node positions (you might want to calculate these dynamically for larger graphs)
const nodePositions: { [key: string]: { x: number; y: number } } = {
  A: { x: 200, y: 50 },
  B: { x: 100, y: 150 },
  C: { x: 300, y: 150 },
  D: { x: 50, y: 250 },
  E: { x: 150, y: 250 },
  F: { x: 250, y: 250 },
};

const CIRCLE_RADIUS = 22;

function calculateLineEndpoint(x1: number, y1: number, x2: number, y2: number, radius: number) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const angle = Math.atan2(dy, dx);
  return {
    x: x2 - radius * Math.cos(angle),
    y: y2 - radius * Math.sin(angle)
  };
}

export default function DFSAnimation({
  graph,
  traversalSteps,
  target,
  triggered
}: DFSAnimationProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [visitedNodes, setVisitedNodes] = useState<Set<string>>(new Set());
  const [currentNode, setCurrentNode] = useState<string | null>(null);
  const [highlightedEdge, setHighlightedEdge] = useState<[string, string] | null>(null);

  useEffect(() => {
    console.log('triggered', triggered)
    if (traversalSteps && traversalSteps.length > 0) {
      animateTraversal();
    }
  }, [traversalSteps, triggered]);

  const animateTraversal = () => {
    if (!traversalSteps) return;

    let stepIndex = 0;
    const interval = setInterval(() => {
      if (stepIndex >= traversalSteps.length) {
        clearInterval(interval);
        return;
      }

      const step = traversalSteps[stepIndex];
      setCurrentStep(stepIndex);

      switch (step.action) {
        case 'visit':
          setVisitedNodes(prev => new Set(prev).add(step.node));
          setCurrentNode(step.node);
          setHighlightedEdge(null);
          break;
        case 'move':
          setHighlightedEdge([step.from, step.to]);
          break;
        case 'backtrack':
          setHighlightedEdge([step.from, step.to]);
          setCurrentNode(step.to);
          break;
      }

      stepIndex++;
    }, 1000); // Adjust timing as needed

    return () => clearInterval(interval);
  };

  if (!traversalSteps) {
    return <div>No traversal steps available</div>;
  }

  return (
    <div className='flex flex-col items-center'>
      <svg width="400" height="300">
        {Object.entries(graph).map(([node, neighbors]) => (
          <React.Fragment key={node}>
            {neighbors.map(neighbor => {
              const start = calculateLineEndpoint(
                nodePositions[neighbor].x,
                nodePositions[neighbor].y,
                nodePositions[node].x,
                nodePositions[node].y,
                CIRCLE_RADIUS
              );
              const end = calculateLineEndpoint(
                nodePositions[node].x,
                nodePositions[node].y,
                nodePositions[neighbor].x,
                nodePositions[neighbor].y,
                CIRCLE_RADIUS
              );
              return (
                <line
                  key={`${node}-${neighbor}`}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke={highlightedEdge &&
                    ((highlightedEdge[0] === node && highlightedEdge[1] === neighbor) ||
                      (highlightedEdge[1] === node && highlightedEdge[0] === neighbor))
                    ? 'red'
                    : 'black'}
                  strokeWidth="2"
                />
              );
            })}
            <circle
              cx={nodePositions[node].x}
              cy={nodePositions[node].y}
              r={CIRCLE_RADIUS}
              fill={visitedNodes.has(node) ? '#9eedf0' : 'white'}
              stroke={currentNode === node ? 'red' : 'black'}
              strokeWidth="3"
            />
            <text
              x={nodePositions[node].x}
              y={nodePositions[node].y}
              textAnchor="middle"
              dy=".3em"
            >
              {node}
            </text>
          </React.Fragment>
        ))}
      </svg>
      <div className='mt-10 font-serif text-xl'>
        {
          triggered
            ?
            (
              <div>
                <p className='text-center font-mono'>Searching for {target}</p>
                <p className='text-center mt-2 font-mono'>Step: {currentStep + 1} / {traversalSteps.length}</p>
              </div>
            )
            :
            (
              <p className='font-mono'>Select a Search Target</p>
            )}
      </div>
    </div>
  );


}