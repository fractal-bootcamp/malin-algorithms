import axios from "axios";

// import type { NodeLinearSearch, NodeBinarySearch } from "../../../types/typesSearch";
import type {
	BubbleSortState,
} from "@/types/typesSort";

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