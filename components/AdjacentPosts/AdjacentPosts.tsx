import { AdjacentPosts } from "@lib/posts";
import Link from "next/link";
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import { AiOutlineArrowLeft } from "@react-icons/all-files/ai/AiOutlineArrowLeft";

interface Props {
  adjacentPosts: AdjacentPosts;
}

const AdjacentPosts = ({ adjacentPosts }: Props) => {
  const { prevPost, nextPost } = adjacentPosts;

  return (
    <div className={`flex justify-between w-full mt-20 mb-10`}>
      <div className="w-1/2 flex justify-start">
        {!prevPost ? (
          ""
        ) : (
          <Link href={`/posts/${prevPost.slug}`}>
            <div className="group flex flex-col items-center justify-between no-underline h-32 sm:h-24 w-4/5 p-5  rounded-2xl shadow-slate-500 dark:shadow-black shadow-lg">
              <div className="flex justify-center items-center">
                <AiOutlineArrowLeft className="text-slate-400 group-hover:text-sky-400 dark:group-hover:text-indigo-500" />
                <span className="text-xs text-slate-400 group-hover:text-sky-400 dark:group-hover:text-indigo-500">
                  PREVIOUS
                </span>
              </div>
              <span className="line-clamp-2 sm:line-clamp-1 text-md">
                {prevPost.title}
              </span>
            </div>
          </Link>
        )}
      </div>
      <div className="w-1/2 flex justify-end">
        {!nextPost ? (
          ""
        ) : (
          <Link href={`/posts/${nextPost.slug}`}>
            <div className="group flex flex-col items-center justify-between no-underline h-32 sm:h-24 w-4/5 p-5  rounded-2xl shadow-slate-500 dark:shadow-black shadow-lg">
              <div className="flex justify-center items-center">
                <span className="text-xs text-slate-400 group-hover:text-sky-400 dark:group-hover:text-indigo-500">
                  NEXT
                </span>
                <AiOutlineArrowRight className="text-slate-400 group-hover:text-sky-400 dark:group-hover:text-indigo-500" />
              </div>
              <span className="line-clamp-2 sm:line-clamp-1 text-md">
                {nextPost.title}
              </span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AdjacentPosts;
