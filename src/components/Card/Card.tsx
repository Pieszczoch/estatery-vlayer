import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC } from "react";

interface Props {
  image: string | StaticImport;
  price: number;
  name: string;
  address: string;
  className?: string;
}

const Card: FC<Props> = ({ image, price, name, address, className }) => (
  <div
    className={cn(
      "w-[166px] h-auto rounded-sm bg-white lg:w-[352px] lg:h-[345px]",
      className
    )}
  >
    <Image
      src={image}
      alt={`${name}-image-alt`}
      className="w-full aspect-video"
    />
    <div className="p-2.5 lg:p-6 space-y-1 lg:space-y-2">
      <p className="text-secondary-300 font-extrabold text-xs lg:text-2xl">
        {price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        })}
        <span className="text-gray-300 font-medium">/month</span>
      </p>
      <p className="font-bold tracking-tight lg:text-2xl">{name}</p>
      <p className="text-gray-300 text-xxs lg:text-base">{address}</p>
    </div>
  </div>
);

export { Card };
