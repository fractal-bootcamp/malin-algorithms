import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <nav>
        <ul className="flex flex-col justify-center items-center min-h-[calc(100vh-4rem)]">
          <div className="search flex flex-col border-2">
            <li className="p-4 border-gray-300 w-64 h-24 flex justify-center items-center m-8">
              <Link href="/linear-search"
                className="w-64 h-24 bg-white border-2 border-blue-300 rounded-lg shadow-md hover:shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex justify-center items-center text-xl text-blue-600 font-semibold">
                Linear Search</Link>
            </li>
            <li className="p-4 border-gray-300 w-64 h-24 flex justify-center items-center m-8">
              <Link href="/binary-search"
                className="w-64 h-24 bg-white border-2 border-blue-300 rounded-lg shadow-md hover:shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex justify-center items-center text-xl text-blue-600 font-semibold">
                Binary Search</Link>
            </li>
            <li className="p-4 border-gray-300 w-64 h-24 flex justify-center items-center m-8">
              <Link href="/binary-search"
                className="w-64 h-24 bg-white border-2 border-blue-300 rounded-lg shadow-md hover:shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex justify-center items-center text-xl text-blue-600 font-semibold">
                BFS</Link>
            </li>
            <li className="p-4 border-gray-300 w-64 h-24 flex justify-center items-center m-8">
              <Link href="/search/dfs"
                className="w-64 h-24 bg-white border-2 border-blue-300 rounded-lg shadow-md hover:shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex justify-center items-center text-xl text-blue-600 font-semibold">
                DFS</Link>
            </li>
          </div>
          <div className="sort flex flex-row border-2 mt-24">
            <li className="p-4 border-gray-300 w-64 h-24 flex justify-center items-center m-8">
              <Link href="/sort/bubblesort"
                className="w-64 h-24 bg-white border-2 border-blue-300 rounded-lg shadow-md hover:shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex justify-center items-center text-xl text-blue-600 font-semibold"
              >
                Bubble Sort</Link>
            </li>
            <li className="p-4 border-gray-300 w-64 h-24 flex justify-center items-center m-8">
              <Link href="/sort/selectionsort"
                className="w-64 h-24 bg-white border-2 border-blue-300 rounded-lg shadow-md hover:shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex justify-center items-center text-xl text-blue-600 font-semibold"
              >
                Selection Sort</Link>
            </li>
            <li className="p-4 border-gray-300 w-64 h-24 flex justify-center items-center m-8">
              <Link href="/sort/insertionsort"
                className="w-64 h-24 bg-white border-2 border-blue-300 rounded-lg shadow-md hover:shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex justify-center items-center text-xl text-blue-600 font-semibold"
              >
                Insertion Sort</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default page;