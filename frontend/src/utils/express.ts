import axios from "axios";

// import type { NodeLinearSearch, NodeBinarySearch } from "../../../types/typesSearch";
import type {
	BubbleSortState,
	SelectionSortState
} from "@/types/typesSort";

import type {
	Graph,
	Vertex
} from "@/types/typesSearch"

// Search: DFS -> take in a graph and a target and return a set
export async function getDFS(graph: Graph<string>, currentVertex: string, target: string): Promise<Set<string> | null> {
	const res = await axios({
		method: "POST",
		url: "http://localhost:3001/algorithms/search/dfs",
		// we're sending two pieces of data to the server -> graph and target
		data: {
			graph: graph,
			currentVertex: currentVertex,
			target: target
		},
	}); // send an unsortedArray and recieve a sorted Array
	return res.data;
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