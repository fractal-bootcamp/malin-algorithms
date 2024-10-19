import axios from "axios";

// import type { NodeLinearSearch, NodeBinarySearch } from "../../../types/typesSearch";
import type {
	BubbleSortState,
	SelectionSortState
} from "@/types/typesSort";

import type {
	Graph,
	Vertex,
	TraversalStep
} from "@/types/typesSearch"

// Search: DFS -> take in a graph and a target and return a set
export async function getDFS(graph: Graph<string>, currentVertex: string, target: string|null): Promise<TraversalStep[] | null> {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:3001/algorithms/search/dfs",
      data: {
        graph,
        currentVertex,
        target
      },
    });
    console.log('what was returned:', res)
    if (res.status === 200 && Array.isArray(res.data)) {
      return res.data;
    } else {
      console.error('Unexpected response:', res);
      return null;
    }
  } catch (error) {
    console.error('Error fetching DFS data:', error);
    return null;
  }
}

// Sort: bubble sort
export async function getBubbleSort(unsortedArray: number[]): Promise<BubbleSortState> {
	const res = await axios({
		method: "POST",
		url: "http://localhost:3001/algorithms/sort/bubble",
		data: {
			array: unsortedArray,
		},
	}); // send an unsortedArray and recieve a sorted Array
	return res.data;
}

// Sort: selection sort
export async function getSelectionSort(unsortedArray: number[]): Promise<SelectionSortState> {
	const res = await axios({
		method: "POST",
		url: "http://localhost:3001/algorithms/sort/selection",
		data: {
			array: unsortedArray,
		},
	}); // send an unsortedArray and recieve a sorted Array
	return res.data;
}