// Define a type for the graph
type Graph<T> = {
  [key: string]: T[]
};

// Example usage
const graph: Graph<string> = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

type Vertex = string;
// the graph has the following inputs: 
// - a graph
// - starting vertex
// - a data structure for storing visited nodes -> we define its default value in the parameter as well as an empty set
// the return of the dfs search will be either a set of strings or null if the search failed
export function DFS(graph: Graph<string>, currentVertex: string, target: string, visited: Set<string> = new Set()): Set<string> | null {
  // add the currentVertex to the visited array
  visited.add(currentVertex);
  // define the neighbours of the currentVertex
  const neighbours = graph[currentVertex]

  // check if the target has been visited and if it has return the graph traversal so far
  if (currentVertex === target) {
    return visited
  }

  // we loop over the neighbouring nodes of the currentVertex
  for (const neighbour of neighbours) {
    // if the neighbour we are visiting is not already contained in the array, then implement dfs again
    if (!visited.has(neighbour)) {
      const search = DFS(graph, neighbour, target, visited);
      // if the search finds something return, else return "not found"
      if (search) {
        return search;
      }
    }
  }
  // if we've exhausted all neighbour without finding the target, we return null
  return null
}