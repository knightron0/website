"use client";

import { posts } from "#site/content";
import Link from "next/link";
import { useState } from "react";

const HomePosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const paginatedPosts: any = posts
    .sort(
      (
        a: { date: string | number | Date },
        b: { date: string | number | Date }
      ) => {
        const dateA = new Date(a.date) as any;
        const dateB = new Date(b.date) as any;

        return dateB - dateA;
      }
    )
    .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <div className="flex flex-col justify-between w-full">
      {paginatedPosts.map((post: any) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4 p-2"
          href={`/posts/${post.slug}`}
        >
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-between gap-2">
              <p className="text-lg font-medium tracking-tight hover:underline">
                {post.title}
              </p>
              <p className="text-gray-500 text-xs whitespace-nowrap">
                {new Date(post.date)
                  .toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                  .replace(/ /g, "-")}
              </p>
            </div>
            <div className="max-w-lg text-neutral-500">{post.summary}</div>
          </div>
        </Link>
      ))}
      <div className="flex justify-between mt-10">
        {currentPage > 1 ? (
          <button
            onClick={handlePreviousPage}
            className="hover:underline text-sm ml-2"
          >
            Previous
          </button>
        ) : (
          <div></div>
        )}
        <button
          onClick={handleNextPage}
          disabled={currentPage * postsPerPage >= posts.length}
          className="hover:underline text-sm mr-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};


export default HomePosts;