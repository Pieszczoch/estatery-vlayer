"use client";
import Image from "next/image";
import { content } from "./content";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import useInViewMargin from "@/hooks/useInViewMargin";
import Tabs from "@/components/ui/Tabs";

const Testimonials = () => {
  const { title, description, opinions } = content;

  const margin = useInViewMargin();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: margin });

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
        hidden: {},
      }}
      className="bg-gradient-to-b from-white to-primary"
    >
      <Tabs.Wrapper
        defaultValue={opinions[0].name}
        className="pt-4 pb-8 px-8 gap-8 lg:px-0 lg:py-8 lg:max-w-[736px] mx-auto"
      >
        <article className="text-center space-y-6 max-w-[352px] mx-auto">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="text-3.5xl lg:text-4.5xl font-bold"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base-600 font-medium"
          >
            {description}
          </motion.p>
        </article>
        {opinions.map(({ name, role, opinion }) => (
          <Tabs.Content
            key={`${name}-key`}
            value={name}
            className="text-center space-y-4"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="text-xl font-medium"
            >
              {opinion}
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-bold"
            >
              {name}, <span className="font-normal text-base-600">{role}</span>
            </motion.p>
          </Tabs.Content>
        ))}
        <Tabs.List className="mx-auto" asImg>
          {opinions.map((item, index) => (
            <motion.div
              key={`${item.name}-motion`}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Tabs.Trigger value={item.name} asImg>
                <Image src={item.avatar} alt={item.name} className="size-15" />
              </Tabs.Trigger>
            </motion.div>
          ))}
        </Tabs.List>
      </Tabs.Wrapper>
    </motion.section>
  );
};

export { Testimonials };
