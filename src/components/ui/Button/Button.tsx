import React, { ComponentProps, FC } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-lg font-bold transition-all cursor-pointer disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-secondary-300 text-white hover:bg-secondary-100 focus:outline-2 outline-secondary-800 active:bg-secondary-600 disabled:bg-paragraph",
        secondary:
          "text-black outline-2 outline-base-300 hover:outline-secondary-300 focus:outline-secondary-300 focus:text-secondary-300 active:outline-secondary-100 active:text-secondary-100 disabled:outline-gray-100 disabled:text-gray-200",
      },
      size: {
        default: "rounded-lg py-3 px-8.5",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface Props
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button: FC<Props> = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button };
