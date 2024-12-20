import { posts } from "#site/content";
import Link from "next/link";

const getGroupedPosts = (posts: any[]) => {
  return posts.reduce((acc, post) => {
    const monthYear = new Date(post.date).toLocaleDateString("en-GB", {
      month: "short",
      year: "numeric",
    });

    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }

    acc[monthYear].push(post);
    return acc;
  }, {} as { [key: string]: any[] });
};

const Posts = () => {
  const groupedPosts = getGroupedPosts(posts);
  const monthYears = Object.keys(groupedPosts).sort((a, b) => {
    const [aMonth, aYear] = a.split(" ");
    const [bMonth, bYear] = b.split(" ");
    const dateA = new Date(`${aMonth} 1, ${aYear}`);
    const dateB = new Date(`${bMonth} 1, ${bYear}`);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="flex flex-col w-full">
      {monthYears.map((monthYear) => (
        <div key={monthYear} className="mb-6">
          <h2 className="text-xl font-bold mb-4 p-2">{monthYear}</h2>
          <div className="flex flex-col justify-between">
            {groupedPosts[monthYear].map((post: any) => (
              <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-4 p-2"
                href={`/posts/${post.slug}`}
              >
                <div className="w-full flex flex-col">
                  <div className="flex justify-start gap-5">
                    <p className="text-neutral-500 text-xs whitespace-nowrap leading-6">
                      {new Date(post.date)
                        .toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                        .replace(/ /g, "-")}
                    </p>
                    <p className="text-lg font-medium tracking-tight leading-2">
                      {post.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const PostPage = () => {
  return (
    <main className="flex items-center justify-between flex-col p-8 min-h-screen">
      <div className="w-full max-w-2xl flex-grow">
        <Posts />
      </div>
    </main>
  );
};

export default PostPage;
