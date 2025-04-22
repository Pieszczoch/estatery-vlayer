import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { content } from "./content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Card from "@/components/Card";

const Cards = () => {
  const { tabs, title, description } = content;
  return (
    <section>
      <Tabs defaultValue={tabs[0].tab} className="py-16 gap-8">
        <TabsList className="mx-auto">
          {tabs.map((item) => (
            <TabsTrigger key={`${item.tab}-key`} value={item.tab}>
              {item.tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <article className="text-center px-8 lg:px-0 space-y-6 max-w-[544px] mx-auto">
          <h2 className="text-3.5xl lg:text-4.5xl font-bold">{title}</h2>
          <p className="text-base-600 font-medium">{description}</p>
        </article>
        <Carousel opts={{ dragFree: true }} className="mt-4 lg:hidden">
          {tabs.map(({ tab, cards }) => (
            <TabsContent value={tab} key={`${tab}-key`}>
              <CarouselContent className="space-x-4 mx-8">
                {cards.map((item, index) => (
                  <CarouselItem key={`${item.name}-${index}-key`}>
                    <Card badgeText="HOUSE" {...item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </TabsContent>
          ))}
        </Carousel>
        <div className="hidden lg:block">
          {tabs.map(({ tab, cards }) => (
            <TabsContent
              value={tab}
              key={`${tab}-key`}
              className="flex items-center gap-8 justify-center"
            >
              {cards.map((item, index) => (
                <Card
                  badgeText={tab === "Houses" ? "HOUSE" : "APARTMENTS"}
                  key={`${item.name}-${index}-key`}
                  {...item}
                />
              ))}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
};

export { Cards };
