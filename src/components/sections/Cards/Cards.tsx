"use client";

import { content } from "./content";
import Carousel from "@/components/ui/Carousel";
import Card from "@/components/Card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import useInViewMargin from "@/hooks/useInViewMargin";
import Tabs from "@/components/ui/Tabs";

const Cards = () => {
  const { tabs, title, description } = content;

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
    >
      <Tabs.Wrapper defaultValue={tabs[0].tab} className="py-16 gap-8">
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Tabs.List className="mx-auto">
            {tabs.map((item) => (
              <Tabs.Trigger key={`${item.tab}-key`} value={item.tab}>
                {item.tab}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </motion.div>
        <article className="text-center px-8 lg:px-0 space-y-6 max-w-[544px] mx-auto">
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
        <Carousel.Wrapper opts={{ dragFree: true }} className="mt-4 lg:hidden">
          {tabs.map(({ tab, cards }) => (
            <Tabs.Content value={tab} key={`${tab}-key`}>
              <Carousel.Content className="space-x-4 mx-8">
                {cards.map((item, index) => (
                  <motion.div
                    key={`${item.name}-${index}-key`}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Carousel.Item>
                      <Card badgeText="HOUSE" {...item} />
                    </Carousel.Item>
                  </motion.div>
                ))}
              </Carousel.Content>{" "}
            </Tabs.Content>
          ))}
        </Carousel.Wrapper>
        <div className="hidden lg:block">
          {tabs.map(({ tab, cards }) => (
            <Tabs.Content
              value={tab}
              key={`${tab}-key`}
              className="flex items-center gap-8 justify-center"
            >
              {cards.map((item, index) => (
                <motion.div
                  key={`${item.name}-${index}-key`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card
                    badgeText={tab === "Houses" ? "HOUSE" : "APARTMENTS"}
                    {...item}
                  />
                </motion.div>
              ))}
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Wrapper>
    </motion.section>
  );
};

export { Cards };
