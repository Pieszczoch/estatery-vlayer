import { cn } from "@/lib/utils";
import { FC } from "react";
import IconStars from "@/assets/icons/stars.svg";

interface Props {
  isPreview?: boolean;
  badgeText?: string;
}

const Badge: FC<Props> = ({ isPreview, badgeText }) => (
  <div
    className={cn(
      "w-fit h-8 px-4 rounded-lg rounded-bl-none absolute bg-secondary-500 top-1/2 -left-2 flex items-center justify-center gap-1",
      isPreview && "hidden"
    )}
  >
    <span className="absolute size-2 bg-secondary-500 -rotate-60 -bottom-[3px] left-[2px] -z-10" />
    <IconStars width={16} height={16} />
    <p className="text-xs text-white font-bold">{badgeText}</p>
  </div>
);

export { Badge };
