import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-blue-600 text-white p-4 text-center shadow-md">
        <h1 className="text-3xl font-bold">Visualising Algorithms</h1>
      </header>
      <nav>
        <ul className="flex flex-col justify-center items-center min-h-[calc(100vh-4rem)]">
          <li className="p-4 border-gray-300 w-64 h-24 flex justify-center items-center m-8">
            <Link href="/search"
              className="w-64 h-24 bg-white border-2 border-blue-300 rounded-lg shadow-md hover:shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex justify-center items-center text-xl text-blue-600 font-semibold">
              Search</Link>
          </li>
          <li className="p-4 border-gray-300 w-64 h-24 flex justify-center items-center m-8">
            <Link href="/sort"
              className="w-64 h-24 bg-white border-2 border-blue-300 rounded-lg shadow-md hover:shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex justify-center items-center text-xl text-blue-600 font-semibold"
            >
              Sort</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default page;