"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import Circle from "@/components/Circle";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  asImg = false,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & {
  asImg?: boolean;
}) {
  const defaultStyle =
    "bg-secondary-0/30 grid grid-cols-2 w-fit items-center justify-center rounded-lg p-2 gap-8";

  const imgStyle = "flex gap-8";
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(asImg ? imgStyle : defaultStyle, className)}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  asImg = false,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  asImg?: boolean;
}) {
  const defaultStyle = [
    "rounded-md px-5 py-2.5 text-lg font-medium transition-all flex-1 text-base-600",
    "data-[state=active]:bg-base-200 data-[state=active]:shadow-sm data-[state=active]:bg-white data-[state=active]:text-secondary-300 data-[state=active]:font-bold",
    "hover:text-secondary-300 data-[state=active]:hover:bg-secondary-0",
    "focus:bg-secondary-200/20 focus:outline focus:outline-secondary-300",
  ];

  const imgStyle =
    "relative z-50 data-[state=active]:[&>svg]:block cursor-pointer data-[state=active]:[&>svg]:cursor-default";
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(asImg ? imgStyle : defaultStyle, className)}
      {...props}
    >
      {props.children}
      <Circle
        percentage={65}
        circleWidth={72}
        className="absolute hidden -top-[6px] -left-[6px]"
      />
    </TabsPrimitive.Trigger>
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
