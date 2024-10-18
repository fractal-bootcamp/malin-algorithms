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

export default function DFSAnimation({
  graph,
  traversalSteps
}: DFSAnimationProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [visitedNodes, setVisitedNodes] = useState<Set<string>>(new Set());
  const [currentNode, setCurrentNode] = useState<string | null>(null);
  const [highlightedEdge, setHighlightedEdge] = useState<[string, string] | null>(null);

  useEffect(() => {
    if (traversalSteps && traversalSteps.length > 0) {
      animateTraversal();
    }
  }, [traversalSteps]);

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
    <div>
      <svg width="400" height="300">
        {Object.entries(graph).map(([node, neighbors]) => (
          <React.Fragment key={node}>
            {neighbors.map(neighbor => (
              <line
                key={`${node}-${neighbor}`}
                x1={nodePositions[node].x}
                y1={nodePositions[node].y}
                x2={nodePositions[neighbor].x}
                y2={nodePositions[neighbor].y}
                stroke={highlightedEdge &&
                  ((highlightedEdge[0] === node && highlightedEdge[1] === neighbor) ||
                    (highlightedEdge[1] === node && highlightedEdge[0] === neighbor))
                  ? 'red'
                  : 'black'}
                strokeWidth="2"
              />
            ))}
            <circle
              cx={nodePositions[node].x}
              cy={nodePositions[node].y}
              r="22"
              fill={visitedNodes.has(node) ? 'lightblue' : 'white'}
              stroke={currentNode === node ? 'red' : 'black'}
              strokeWidth="2"
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
      <div>Current Step: {currentStep + 1} / {traversalSteps.length}</div>
    </div>
  );


}