import Image from "next/image";
import { content } from "./content";
import map from "@/assets/images/map.png";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";

const Header = () => {
  const { header, paragraph, card, stats } = content;
  return (
    <section className="relative flex flex-col gap-4 overflow-hidden lg:flex-row">
      <div className="purple-circle" />
      <div className="blur-circle" />
      <article
        className={cn(
          "relative flex flex-col items-center gap-8 px-8 pt-8.5 pb-4.5 text-center",
          "lg:text-left lg:w-1/2 lg:py-37 lg:px-16 lg:items-start"
        )}
      >
        <h1 className="text-4.5xl font-bold lg:text-6.5xl lg:max-w-[544px]">
          {header}
        </h1>
        <p className="text-xl lg:max-w-[400px] font-medium">{paragraph}</p>
        <div className="flex gap-8 lg:mt-12 w-full">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex items-center gap-6 text-left w-full lg:w-fit"
            >
              <span className="h-full w-[3px] bg-base-300" />
              <div className="lg:w-[133px]">
                <p className="mb-1 text-3.5xl font-bold text-secondary-300">
                  {value}
                </p>
                <p className="text-base-600">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
      <div className="relative h-[310px] lg:flex lg:w-1/2 lg:h-full justify-end">
        <Card
          {...card}
          className="absolute z-50 top-1/4 left-6 lg:left-14 drop-shadow-xl"
        />

        <Image
          src={map}
          alt="map"
          className="w-[292px] lg:w-auto lg:max-w-[704px] aspect-auto right-8 absolute lg:static"
        />
      </div>
    </section>
  );
};

export { Header };
