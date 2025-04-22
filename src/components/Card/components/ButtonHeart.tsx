import IconHeart from "@/assets/icons/heart.svg";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  isPreview?: boolean;
}

const ButtonHeart: FC<Props> = ({ isPreview }) => (
  <button
    className={cn(
      "absolute top-[62%] right-6 cursor-pointer rounded-full duration-300 group hover border-none outline-none",
      isPreview && "hidden"
    )}
  >
    <IconHeart
      className={cn(
        "size-12 rounded-full",
        "hover:shadow-lg [&>circle]:group-hover:stroke-secondary-100 [&>path]:group-hover:stroke-secondary-700 duration-300",
        "[&>circle]:group-focus:stroke-secondary-300 [&>path]:group-focus:stroke-secondary-700 [&>circle]:group-focus:fill-secondary-200/20",
        "[&>circle]:group-focus:stroke-secondary-300 [&>path]:group-focus:stroke-white [&>circle]:group-focus:fill-secondary-500"
      )}
    />
  </button>
);

export default ButtonHeart;
