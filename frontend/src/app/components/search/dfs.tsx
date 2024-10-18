import React, { useState, useEffect } from 'react';


type Graph<T> = {
  [key: string]: T[]
};

const graph: Graph<string> = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

export default function dfsAnimation({
  graph,
  currentVertex,
  target
}) {
  const [currentVertex, setCurrentVertex] = useState<string>('A')
  const [target, setTarget] = useState<string>('D');
  const [result, setResult] = useState<Set<string> | null>(null);
  const [visitedOrder, setVisitedOrder] = useState<string[]>([]);

  useEffect(() => {



  }, [])




}