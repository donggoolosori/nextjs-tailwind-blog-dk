"use client";

import type { PostMetaData } from "@lib/posts";
import PostImage from "@components/PostImage";
import Tags from "@components/Tags";
import { FC } from "react";
import { useRouter } from "next/navigation";

type Props = PostMetaData;

const PostCard: FC<Props> = ({
  id,
  title,
  date,
  coverImg,
  description,
  blurCss,
  tags,
}) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/posts/${id}`);
  };

  return (
    <div
      onClick={onClick}
      className="cursor-pointer group max-w-[400px] min-w-[300px] h-96 rounded-3xl flex flex-col flex-1 gap-2 relative shadow-xl dark:shadow-lg shadow-slate-500 dark:shadow-black">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl brightness-75 dark:brightness-50">
        <PostImage blurCss={blurCss} coverImg={coverImg} hoverScaleUp />
      </div>
      <section className="z-10 w-full h-full flex flex-col justify-end gap-8 px-10 pb-8 text-slate-50">
        <Tags tags={tags} />
        <div className="font-bold text-2xl w-full line-clamp-2 sm:line-clamp-1 md:line-clamp-2">
          {title}
        </div>
        <div className="text-md w-full line-clamp-2 max-w-2xl">
          {description}
        </div>
        <div className="text-md italic">{date}</div>
      </section>
    </div>
  );
};

export default PostCard;
