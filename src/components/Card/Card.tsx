import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC } from "react";
import { Badge } from "./components/Badge";
import ButtonHeart from "./components/ButtonHeart";

interface Props {
  image: string | StaticImport;
  price: number;
  name: string;
  address: string;
  isPreview?: boolean;
  badgeText?: string;
}

const Card: FC<Props> = ({
  image,
  price,
  name,
  address,
  isPreview,
  badgeText,
}) => (
  <div
    className={cn(
      "w-[303px] bg-white lg:w-[352px] relative",
      isPreview &&
        "w-[166px] h-auto absolute z-20 top-1/4 left-6 lg:-left-12 drop-shadow-xl rounded-lg"
    )}
  >
    <Badge badgeText={badgeText} isPreview={isPreview} />
    <ButtonHeart isPreview={isPreview} />

    <Image
      src={image}
      alt={`${name}-image-alt`}
      className={cn("w-full", !isPreview && "h-[200px]")}
    />
    <div
      className={cn(
        "p-6 pt-8 space-y-1 lg:space-y-2 border rounded-b-lg border-neutral-200",
        isPreview && "p-2.5 lg:p-6"
      )}
    >
      <p
        className={cn(
          "text-secondary-300 font-extrabold text-2xl",
          isPreview && "text-xs lg:text-2xl"
        )}
      >
        {price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        })}
        <span className="text-gray-300 font-medium text-base">/month</span>
      </p>
      <p
        className={cn(
          "font-bold tracking-tight text-2xl",
          isPreview && "text-base lg:text-2xl"
        )}
      >
        {name}
      </p>
      <p
        className={cn(
          "text-gray-300 lg:text-base font-medium truncate max-w-[225px] lg:max-w-max",
          isPreview && "text-xxs"
        )}
      >
        {address}
      </p>
    </div>
  </div>
);

export { Card };
