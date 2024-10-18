import React, { useState, useEffect } from 'react';
import type { Graph, DFSAnimationProps } from '@/types/typesSearch';

export default function DFSAnimation({
  graph,
  currentVertex,
  target
}: DFSAnimationProps) {
  const [currentVertex, setCurrentVertex] = useState<string>('A')
  const [target, setTarget] = useState<string>('D');
  const [result, setResult] = useState<Set<string> | null>(null);
  const [visitedOrder, setVisitedOrder] = useState<string[]>([]);

  useEffect(() => {


  }, [])

  return (
    <div>

    </div>
  )


}