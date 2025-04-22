import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { content } from "./content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Card from "@/components/Card";

const Cards = () => {
  const { tabs, title, description, housesCards, apartmentsCards } = content;
  return (
    <Tabs defaultValue="Houses" className="py-16 gap-8">
      <TabsList className="mx-auto">
        {tabs.map((item) => (
          <TabsTrigger key={`${item}-key`} value={item}>
            {item}
          </TabsTrigger>
        ))}
      </TabsList>
      <article className="text-center px-8 lg:px-0 space-y-6 max-w-[544px] mx-auto">
        <h2 className="text-3.5xl lg:text-4.5xl font-bold">{title}</h2>
        <p className="text-base-600 font-medium">{description}</p>
      </article>
      <Carousel opts={{ dragFree: true }} className="mt-4 lg:hidden">
        <TabsContent value="Houses">
          <CarouselContent className="space-x-4 mx-8">
            {housesCards.map((item, index) => (
              <CarouselItem key={`${item.name}-${index}-key`}>
                <Card badgeText="HOUSE" {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </TabsContent>
        <TabsContent value="Apartments">
          <CarouselContent className="space-x-4 mx-8">
            {apartmentsCards.map((item, index) => (
              <CarouselItem key={`${item.name}-${index}-key`}>
                <Card badgeText="APARTMENT" {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </TabsContent>
      </Carousel>
      <div className="hidden lg:block">
        <TabsContent
          value="Houses"
          className="flex items-center gap-8 justify-center"
        >
          {housesCards.map((item, index) => (
            <Card
              badgeText="HOUSE"
              key={`${item.name}-${index}-key`}
              {...item}
            />
          ))}
        </TabsContent>
        <TabsContent value="Apartments">
          {apartmentsCards.map((item, index) => (
            <Card
              badgeText="APARTMENT"
              key={`${item.name}-${index}-key`}
              {...item}
            />
          ))}
        </TabsContent>
      </div>
    </Tabs>
  );
};

export { Cards };
