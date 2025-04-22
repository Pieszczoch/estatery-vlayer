import Logo from "@/components/Logo";
import { content } from "./content.";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Footer = () => {
  const { navigation, social } = content;
  return (
    <footer className="p-8 lg:p-16 divide-y divide-base-200">
      <div className="flex flex-col lg:flex-row gap-x-6 gap-y-3.5 pb-6 lg:pb-10 lg:justify-between">
        <Logo />
        <div className="flex justify-center text-center gap-6 flex-wrap">
          {navigation.map(({ label, url }) => (
            <Link href={url} key={`${label}-key`} className="lg:px-6 py-2">
              <p
                className={cn(
                  "min-w-[140px] font-medium text-gray-200 lg:min-w-auto smooth-underline smooth-underline"
                )}
              >
                {label}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center pt-6 lg:pt-10 lg:flex-row lg:justify-between">
        <p className="font-medium text-gray-200 w-fit">
          ©2021 Estatery. All rights reserved
        </p>
        <div className="flex gap-10 w-fit">
          {social.map(({ url, icon }) => (
            <a target="_blank" key={`${url}-key`} href={url}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export { Footer };
