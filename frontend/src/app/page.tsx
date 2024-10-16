import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <nav>
        <ul className="flex">
          <li className="flex-1 p-4 border-2 border-gray-100">
            <Link href="/">Fractal Algorithms</Link>
          </li>
          <li className="p-4 border-2 border-gray-100 w-20 flex justify-center">
            <Link href="/search">Search</Link>
          </li>
          <li className="p-4 border-2 border-gray-100 w-20 flex justify-center">
            <Link href="/sort">Sort</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default page;