import Image from "next/image";
import { content } from "./content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Testimonials = () => {
  const { title, description, opinions } = content;
  return (
    <section className="bg-gradient-to-b from-white to-primary">
      <Tabs
        defaultValue={opinions[0].name}
        className="py-4 px-8 gap-8 lg:px-0 lg:py-8 lg:max-w-[736px] mx-auto"
      >
        <article className="text-center space-y-6 max-w-[352px] mx-auto">
          <h2 className="text-3.5xl lg:text-4.5xl font-bold">{title}</h2>
          <p className="text-base-600 font-medium">{description}</p>
        </article>
        {opinions.map(({ name, role, opinion }) => (
          <TabsContent
            key={`${name}-key`}
            value={name}
            className="text-center space-y-4"
          >
            <p className="text-xl font-medium">{opinion}</p>
            <p className="font-bold">
              {name}, <span className="font-normal text-base-600">{role}</span>
            </p>
          </TabsContent>
        ))}
        <TabsList className="mx-auto" asImg>
          {opinions.map((item) => (
            <TabsTrigger key={`${item.name}-key`} value={item.name} asImg>
              <Image src={item.avatar} alt={item.name} className="size-15" />
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </section>
  );
};

export { Testimonials };
