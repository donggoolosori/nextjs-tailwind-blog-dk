import Image from "next/image";
import { FC } from "react";
import BlurImage from "./BlurImage";

interface Props {
  coverImg: string;
  blurCss?: any;
  priority?: boolean;
  hoverScaleUp?: boolean;
}

const PostImage: FC<Props> = ({
  blurCss,
  coverImg,
  priority,
  hoverScaleUp,
}) => {
  return (
    <div
      className={`relative w-full h-full transition-transform duration-300 ${
        hoverScaleUp ? "group-hover:scale-110" : ""
      }`}>
      {blurCss && <BlurImage blurCss={blurCss} />}
      <Image
        src={coverImg}
        alt="cover-image"
        fill
        sizes="100vw"
        priority={priority}
        className="object-cover m-0"
      />
    </div>
  );
};

export default PostImage;
