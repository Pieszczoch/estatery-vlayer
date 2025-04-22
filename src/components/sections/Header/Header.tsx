"use client";
import Image from "next/image";
import { content } from "./content";
import map from "@/assets/images/map.png";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import useInViewMargin from "@/hooks/useMediaQuery";

const Header = () => {
  const { header, paragraph, card, stats } = content;

  const margin = useInViewMargin();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: margin });

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex flex-col gap-4 overflow-hidden lg:flex-row"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
        hidden: {},
      }}
    >
      <div className="purple-circle" />
      <div className="blur-circle" />
      <article
        className={cn(
          "relative flex flex-col items-center gap-8 px-8 pt-8.5 pb-4.5 text-center",
          "lg:text-left lg:w-full lg:py-37 lg:px-16 lg:items-start"
        )}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="text-4.5xl font-bold lg:text-6.5xl lg:max-w-[544px]"
        >
          {header}
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl lg:max-w-[400px] font-medium"
        >
          {paragraph}
        </motion.p>

        <div className="flex gap-8 lg:mt-12 w-full">
          {stats.map(({ value, label }, index) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              className="flex items-center gap-6 text-left w-full lg:w-fit"
            >
              <span className="h-full w-[3px] bg-base-300" />
              <div className="lg:w-[133px]">
                <p className="mb-1 text-3.5xl font-bold text-secondary-300">
                  {value}
                </p>
                <p className="text-base-600">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </article>
      <motion.div
        className="relative h-[310px] lg:flex lg:w-[705px] lg:h-full justify-end"
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Card isPreview {...card} />
        <Image
          src={map}
          alt="map"
          className="w-[292px] lg:w-auto lg:max-w-[704px] aspect-auto right-8 absolute lg:static"
        />
      </motion.div>
    </motion.section>
  );
};

export { Header };
